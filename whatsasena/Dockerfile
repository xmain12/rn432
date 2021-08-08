FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Agent34567/rn432 /root/rn432
WORKDIR /root/rn432/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
