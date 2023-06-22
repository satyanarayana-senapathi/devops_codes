# Use the official Node.js 14 image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Expose port 8080 for the React app
EXPOSE 3000

# Serve the built app using a simple HTTP server
CMD ["npm", "start"]