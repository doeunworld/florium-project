// florium-backend/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 이 줄을 반드시 추가해야 앵귤러(4200)에서 백엔드(3000) 데이터를 읽을 수 있습니다.
  app.enableCors();

  await app.listen(3000);
}
bootstrap();