import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Postagem } from "../../Postagem/entities/postagem.entity";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../auth/usuario/entities/usuario.entity";



@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'root',
            password: '16121995',
            database: 'db_blogpessoal',
            entities: [Postagem, Tema, Usuario],
            synchronize: true,
    };
  }
}