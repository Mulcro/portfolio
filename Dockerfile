FROM node:23.11.0-slim

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["npm","run","start"]