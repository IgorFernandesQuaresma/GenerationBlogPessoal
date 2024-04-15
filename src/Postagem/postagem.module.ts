import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entitty";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller";

@Module ({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule],
})


export class PostagemModule { }