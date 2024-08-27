# base image
FROM node:22

WORKDIR /app

ENV PORT=3000

COPY package*.json ./

RUN npm i

CMD [ "npm", "start" ]