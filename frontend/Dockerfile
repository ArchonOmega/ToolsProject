
FROM node AS build


RUN mkdir -p /usr/src/app/frontend


WORKDIR /usr/src/app/frontend


COPY package.json /usr/src/app/frontend


RUN npm install


COPY . /usr/src/app/frontend


RUN npm install -g @angular/cli 


EXPOSE 4200


CMD ng serve --host 0.0.0.0