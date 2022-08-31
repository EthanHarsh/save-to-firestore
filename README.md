# save-to-firestore-temp
_Typescript express server Containerized for Google Cloud Run._

![Node.js Badge](https://img.shields.io/badge/JavaScript-Node.js-green) ![Vue Badge](https://img.shields.io/badge/Framework-VUE-green)

## Description

I built this application to assist a client transition from a traditional monolithic application to Firebase. This application decrypts a request and saves it to a Google Firestore Collection. In order to prevent outside abuse, this application requires a key from requests. I would recommend using this application as a temporary measure.

## Quick Start
### Using Docker
```
sudo docker build . -t save-to-firestore

### Using NPM - Production Start
#### Install Dependencies
```
npm run install
```

#### Build
```
npm run build
```

#### Start Command
```
npm run start
```
## Development
### Dev Container
Activate Development container using your prefered IDE.
### Using NPM - Development Start
#### Start for Development - _Nodemon_
```
npm run devStart
```