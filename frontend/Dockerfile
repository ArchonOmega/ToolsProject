
FROM node AS build


RUN mkdir -p /home/ToDo


WORKDIR /home/ToDo


COPY package.json /home/ToDo


RUN npm install


COPY . /home/ToDo


RUN npm install -g @angular/cli 


EXPOSE 4200


CMD ng serve --host 0.0.0.0