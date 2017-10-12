FROM node:8.1.2
COPY . .
RUN if [ -n "$http_proxy" ]; then npm config set proxy $http_proxy && npm config set https-proxy $https_proxy; fi
RUN npm install gulp-cli -g && npm install
WORKDIR /app
EXPOSE 8080
CMD gulp watch
