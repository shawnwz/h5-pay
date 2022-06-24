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
2. Create file ```.env``` and populate with values required.
3. ```yarn install```
4. ```yarn build```
5. ```yarn dev```

## Documentation

To access the full swagger docs use the backend endpoint [http://localhost:8080/docs/#/](http://localhost:8080/docs/#/).
