FROM node:20-alpine
LABEL authors="Juan Pablo Rodriguez"

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]