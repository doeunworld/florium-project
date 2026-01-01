FROM node:18-alpine

WORKDIR /usr/src/app

# 파일을 복사하기 전, 현재 도커 안에 뭐가 있는지 확인 (로그 확인용)
COPY package.json ./

# ★ 여기에 추가하는 거예요! (CMD에 치는 게 아님)
RUN ls -la

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]