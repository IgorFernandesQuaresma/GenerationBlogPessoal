import { IsAlpha, IsNotEmpty } from "class-validator";
import { Tema } from "src/Tema/entities/tema.entity";
import { Usuario } from "src/auth/usuario/entities/usuario.entity";
//import { Tema } from "src/tema/entities/tema.entity";

import { Column, Entity, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity({name: "tb_postagem"})
export class Postagem {

    @PrimaryGeneratedColumn()     //Define chave primaria e autoIncremento
    id: number;

  
    @IsNotEmpty()
    @Column({length:100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length:1000, nullable: false})
    texto: string;

    @UpdateDateColumn()
    data: Date;
    

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}




