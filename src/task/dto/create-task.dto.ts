import { IsString, MinLength } from "class-validator";
//Validaciones

export class CreateTaskDto {

    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @MinLength(1)
    description: string;// Add properties and their types here
}