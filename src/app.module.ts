import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entitty';
import { PostagemModule } from './Postagem/postagem.module';
import { Tema } from './Tema/entities/tema.entity';
import { TemaModule } from './Tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './auth/usuario/entities/usuario.entity';
import { UsuarioModule } from './auth/usuario/usuario.module';


@Module({
  imports: [ //Configura o modulo ORM na raiz do projeto.
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '16121995',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
