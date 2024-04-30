import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../auth/usuario/entities/usuario.entity";


import { Column, Entity, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagem"})
export class Postagem {
    
    @ApiProperty({
        type: Number
    })   
    @PrimaryGeneratedColumn()     //Define chave primaria e autoIncremento
    id: number;

    @ApiProperty({
        type: String
    })  
    @IsNotEmpty()
    @Column({length:100, nullable: false})
    titulo: string;

    @ApiProperty({
        type: String
    })  
    @IsNotEmpty()
    @Column({length:1000, nullable: false})
    texto: string;

    @ApiProperty({
        type: String
    })   
    @UpdateDateColumn()
    data: Date;
    
    @ApiProperty({
        type: String
    })   
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ApiProperty({
        type: String
    })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}




