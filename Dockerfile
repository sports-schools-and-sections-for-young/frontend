FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build && rm -rf ./src && rm -rf node ./node_modules

FROM nginx:latest AS frontend-prod
WORKDIR /app
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
