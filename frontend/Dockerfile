
FROM node AS build


RUN sudo mkdir -p /home/ToDo


WORKDIR /home/ToDo


COPY package.json /home/ToDo


RUN sudo npm install


COPY . /home/ToDo


RUN sudo npm install -g @angular/cli 


EXPOSE 4200


CMD ng serve --host 0.0.0.0