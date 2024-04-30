import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './auth/usuario/usuario.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';
import { PostagemModule } from './postagem/postagem.module';




@Module({
  imports: [ //Configura o modulo ORM na raiz do projeto.
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
    useClass: DevService,
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
