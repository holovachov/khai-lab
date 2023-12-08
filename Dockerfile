FROM node:18.18.2 AS app

WORKDIR /app

RUN npm cache clean --force

COPY . .

RUN npm install
RUN npm run build

FROM nginx:latest AS server

COPY --from=app /app/dist /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
