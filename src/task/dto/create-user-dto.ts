import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @Max(100)
    age: number;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
}