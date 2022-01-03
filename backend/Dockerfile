FROM node
RUN mkdir -p /home/ToDo
WORKDIR /home/ToDo
COPY package*.json /home/ToDo
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "/home/ToDo/index.js"]