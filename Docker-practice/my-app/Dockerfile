#use official image of nodejs
FROM node:16-alpine

#set workdirectory
WORKDIR /app

#copy packaage.json to foiles to container
COPY package*.json ./

#install dependencies
RUN npm install

#copy the rest files
COPY ./ ./

ENV REACT_APP_NAME $REACT_APP_NAME

EXPOSE 3000

#run the application
CMD ["npm","start"]