FROM node:14

WORKDIR /app/backend

COPY package*.json ./

# Copia el archivo .env
COPY .env ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
