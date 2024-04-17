import { IsAlpha, IsNotEmpty } from "class-validator";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_tema"})
export class Tema {

    @PrimaryGeneratedColumn()     //Define chave primaria e autoIncremento
    id: number;

  
    @IsNotEmpty()
    @Column({length:255, nullable: false})
    tema: string;

}
