FROM node
RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
COPY package*.json /usr/src/app/backend
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "/usr/src/app/backend/index.js"]