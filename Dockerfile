FROM node:21-slim
WORKDIR /app
COPY . .
RUN npm install && npm run build
