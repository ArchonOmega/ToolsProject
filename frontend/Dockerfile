
FROM node AS build


RUN mkdir -p /home/frontend


RUN chown -R root:$(whoami) /home/frontend


RUN chmod -R 777 /home/frontend


WORKDIR /home/frontend


COPY package.json /home/frontend


RUN npm install


COPY . /home/frontend


RUN npm install -g @angular/cli 


EXPOSE 4200


CMD ng serve --host 0.0.0.0 --disable-host-check