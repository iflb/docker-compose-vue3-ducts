FROM node:lts-alpine

RUN apk add git python3 make g++

WORKDIR /
COPY package*.json .
RUN npm install

ARG HOME
WORKDIR $HOME

COPY ./ ./

ARG SERVICE_NAME
ENV SERVICE_NAME ${SERVICE_NAME}

ENTRYPOINT ["./entrypoint.sh"]
