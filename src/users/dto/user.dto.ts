import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator'
export class createUserDto {

    @IsNotEmpty()
    
    name:string

    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsNotEmpty()
    @IsString()
    address:string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string

    @IsNotEmpty()
    @IsNumber()
    age:number
}