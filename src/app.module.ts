import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './tema/entities/tema.entity';
import { Usuario } from './auth/usuario/entities/usuario.entity';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
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
     // logging: true,
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
