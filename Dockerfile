FROM node:18-alpine
ENV NODE_ENV production
ARG DOCKER_USER=default_user
RUN addgroup -S $DOCKER_USER && adduser -S $DOCKER_USER -G $DOCKER_USER
USER $DOCKER_USER
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production
COPY build/ .
CMD [ "node", "index.js" ]