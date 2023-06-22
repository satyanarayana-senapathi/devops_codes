# Stage 1
FROM node:14 as build-stage
WORKDIR /app
# COPY package.json package-lock.json /app/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

