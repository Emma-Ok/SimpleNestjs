import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/task/dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @ApiTags('users')
    @Get('/users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('/users')
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

}   