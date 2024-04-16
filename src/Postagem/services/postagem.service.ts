import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, ILike, Repository} from "typeorm";
import { Postagem } from "../entities/postagem.entitty";


@Injectable()
export class PostagemService {
    constructor (
        @InjectRepository(Postagem)
        private postagemRepository: Repository <Postagem>
    ) {}

    async findAll(): Promise <Postagem[]> {
        return await this.postagemRepository.find();
        //Esse find all esta fazendo um select no banco
    }

    async findById(id: number): Promise <Postagem> {
        
        let postagem = await this.postagemRepository.findOne({
            where: {
                id
             }
        });

        if (!postagem) 

            //checa se a postagem não foi encontrada
            throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND)

            // Retornaa postagem, caso exista
         return postagem

        //SELECT * FROM tb_postagens WHERE id = ?
    }

    async findByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`) //I de case insensitive, n importa se maiusculo ou minusculo
            }
        })
    }

    async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem> {

         let buscaPostagem: Postagem = await this.findById(postagem.id)
         if (!buscaPostagem || !postagem.id) 
         throw new HttpException('Postagem não foi encontrada', HttpStatus. NOT_FOUND)
         
        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise <DeleteResult> {

        let buscaPostagem: Postagem = await this.findById(id)
         if (!buscaPostagem) 
         throw new HttpException('Postagem não foi encontrada', HttpStatus. NOT_FOUND)

         return await this.postagemRepository.delete(id)
    }

}



