FROM node:13-alpine

WORKDIR /var/app

ENV NODE_ENV=production

ADD . .

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]