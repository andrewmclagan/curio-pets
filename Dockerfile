# Build
FROM node:13-alpine AS BUILD_IMAGE

WORKDIR /var/app

ENV NODE_ENV=production

ADD . .

RUN yarn install

RUN yarn build

# Run
FROM node:13-alpine

WORKDIR /var/app

COPY --from=BUILD_IMAGE /var/app ./

ARG TAG="latest"

ENV PLATFORM_VER=$TAG

EXPOSE 3000

CMD ["yarn", "start"]