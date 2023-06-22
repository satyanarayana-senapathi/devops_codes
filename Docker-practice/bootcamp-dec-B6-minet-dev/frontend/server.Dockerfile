# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /json

# Copy the entire app to the working directory
COPY api/db.json .

# Install the json-server
RUN npm install -g json-server

# Expose the necessary port
EXPOSE 5000

# Set the command to start the JSON server
CMD ["json-server", "--watch", "db.json", "--port", "5000", "--host", "0.0.0.0"]