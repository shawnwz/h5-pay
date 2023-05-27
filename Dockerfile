FROM node:14-buster

WORKDIR /usr/src/app

# BUILD

COPY . ./

ENV PORT=8080
ENV WXPAY_APPID=$WXPAY_APPID
ENV WXPAY_MCHID=$WXPAY_MCHID

ENV NEW_RELIC_APP_NAME=h5-pay
ENV NEW_RELIC_LICENSE_KEY=e1398f66dc4d03f0edb9f97985f11343FFFFNRAL
ENV NEW_RELIC_ENABLED=true
ENV NEW_RELIC_LOG=stdout

RUN yarn install --frozen-lockfile && yarn build

# RUN

WORKDIR /usr/src/app/api

ENV NODE_ENV=development
ENV WEBAPP_ROOT=/usr/src/app/webapp/build

CMD [ "node", "-r", "newrelic", "./build/index.js" ]
