import { IsAlpha, IsNotEmpty } from "class-validator";
import { Column, Entity, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm"


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
}



