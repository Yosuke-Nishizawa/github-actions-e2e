FROM mcr.microsoft.com/playwright:v1.51.1-noble

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# コンテナをバックグラウンドで継続実行させる
CMD ["tail", "-f", "/dev/null"] 
