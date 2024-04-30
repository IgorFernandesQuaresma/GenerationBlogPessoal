import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './auth/usuario/usuario.module';
import { PostagemModule } from './postagem/postagem.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';




@Module({
  imports: [ //Configura o modulo ORM na raiz do projeto.
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
    useClass: ProdService,
    imports: [ConfigModule],
  }),
    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
