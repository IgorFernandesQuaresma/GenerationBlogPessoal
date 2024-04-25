import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/Postagem/entities/postagem.entitty";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_tema"})
export class Tema {

    @PrimaryGeneratedColumn()     //Define chave primaria e autoIncremento
    id: number;

  
    @IsNotEmpty()
    @Column({length:255, nullable: false})
    descricao: string;

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
   
}