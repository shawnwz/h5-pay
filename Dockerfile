FROM node:14-buster

ARG H5_PAY_NOTIFY_URL

WORKDIR /usr/src/app

# BUILD

COPY . ./

ENV PORT=8080
ENV WXPAY_APPID=$WXPAY_APPID
ENV WXPAY_MCHID=$WXPAY_MCHID
ENV REACT_APP_H5_PAY_NOTIFY_URL=$H5_PAY_NOTIFY_URL
RUN yarn install --frozen-lockfile && yarn build

# RUN

WORKDIR /usr/src/app/api

ENV NODE_ENV=development
ENV WEBAPP_ROOT=/usr/src/app/webapp/build

CMD [ "node", "./build/index.js" ]
