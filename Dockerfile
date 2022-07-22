FROM node:13-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY ./src/package*.json ./

RUN npm install & npm install -g nodemon

COPY ./src ./

EXPOSE 3000

CMD ["nodemon"] 