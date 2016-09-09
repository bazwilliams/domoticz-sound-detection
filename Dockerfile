FROM node:4-slim

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --production --quiet

ENTRYPOINT [ "npm", "run-script", "start" ]
