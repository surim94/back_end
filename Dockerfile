FROM necronia/node-pm2
RUN mkdir -p /home/node/app
RUN mkdir -p /usr/share/zoneinfo

WORKDIR /home/node/app

COPY . .

RUN mv ./localtime /etc/

RUN yarn --offline

CMD [ "pm2-runtime", "npm", "--", "start" ]
