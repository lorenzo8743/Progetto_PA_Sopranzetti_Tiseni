FROM node:lts-stretch-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm i -g nodemon
CMD [ "nodemon", "-L", "index.js" ]