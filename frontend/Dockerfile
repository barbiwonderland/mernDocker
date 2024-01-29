FROM node:18-alpine

WORKDIR /app/frontend

COPY public/ /app/frontend/public
COPY src/ /app/frontend/src
COPY .env ./
COPY package.json /app/frontend/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]