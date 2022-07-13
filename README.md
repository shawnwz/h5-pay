# H5 Pay

## Architecture

This repo contains the frontend and backend of the H5 pay.
- `api` folder contains a tsoa project, which interactive with remote backend services.
- `packages` folder contains shared types.
- `webapp` folder is the frontend, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Node.js (version 12 to 16 should work. Tested on v12 and v16.)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Getting Started

1. Clone the repo.
2. Create file ```/api/.env``` and populate with values required.
3. ```yarn install```
4. ```yarn build```
5. ```yarn dev```

Try http://localhost:3000/?total=100&attach=TEST

`total` is amount in CNY, 100 = 1 Yuan.

`attach` is a self defined string which will be included in the callback req from Wechat.

## Docker Build and Run
1. ```docker build --platform linux/amd64 --build-arg H5_PAY_NOTIFY_URL=http://test.aibmore.cn/notify  -t h5pay .```
2. ```docker run -p 8080:8080 --name h5pay -e WXPAY_APPID=xxx -e WXPAY_MCHID=xxx -e NODE_ENV=development -d h5pay```
## Documentation

To access the full swagger docs use the backend endpoint [http://localhost:8080/docs/#/](http://localhost:8080/docs/#/).
