FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 5007
RUN npm install
COPY . .
CMD ["node", "server.js"]
