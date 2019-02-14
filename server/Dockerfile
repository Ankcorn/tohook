FROM node:latest

ADD ["./yarn.lock", "./package.json", "./"]

RUN yarn install --production --silent

ADD src src

CMD ["npm", "start"]