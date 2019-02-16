FROM node:alpine
ADD ["./yarn.lock", "./package.json", "./"]
RUN yarn install --production --silent
ADD src src
CMD ["yarn", "start"]
