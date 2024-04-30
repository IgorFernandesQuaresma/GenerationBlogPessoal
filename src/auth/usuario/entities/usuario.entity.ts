import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../../postagem/entities/postagem.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty({
        type: Number
    })
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    @ApiProperty({
        type: String
    }) 
    public nome: string

    @IsEmail()
    @Column({length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br",
    type: String}) 
    public usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false }) 
    @ApiProperty({
        type: String
    })  
    public senha: string

    @Column({length: 5000 }) 
    @ApiProperty({
        type: String
    }) 
    public foto: string

    @ApiProperty({
        type: String
    })  
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}