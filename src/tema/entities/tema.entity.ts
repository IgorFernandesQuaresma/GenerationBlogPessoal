import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_tema"})
export class Tema {

    @PrimaryGeneratedColumn() //Define chave primaria e autoIncremento
    @ApiProperty()      
    id: number;

  
    @IsNotEmpty()
    @Column({length:255, nullable: false})
    @ApiProperty()     
    descricao: string;

    @ApiProperty({
        type: String
    })     
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
   
}
