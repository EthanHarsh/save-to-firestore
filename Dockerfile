FROM node:18-bullseye-slim
COPY . /app
WORKDIR ./app
RUN npm ci
RUN npm run build
CMD npm run start