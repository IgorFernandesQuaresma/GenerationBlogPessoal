import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entitty';
import { PostagemModule } from './Postagem/postagem.module';
import { Tema } from './Tema/entities/tema.entity';
import { TemaModule } from './Tema/tema.module';


@Module({
  imports: [ //Configura o modulo ORM na raiz do projeto.
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '16121995',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
