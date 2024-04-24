import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    process.env.TZ = '-03:00'; // Alihar o fuso do brasil
    app.useGlobalPipes(new ValidationPipe()) // O pacote ValidationPipe está sendo habilitado em todas as Requisições HTTP, ou seja, o Validation checará em todas as Requisições,
    app.enableCors(); // o cors serve para acessar requisição forado servidor
  
  await app.listen(4000);
}
bootstrap();
