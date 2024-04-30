import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin {

    @ApiProperty({
        type: String
    }) 
    public usuario: string
    
    @ApiProperty({
        type: String
    }) 
    public senha: string

}