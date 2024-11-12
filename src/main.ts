import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger:["debug","error","fatal","log","warn"]
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api");
  app.enableCors()
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
