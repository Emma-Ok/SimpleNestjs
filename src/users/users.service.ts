import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from 'src/task/dto/create-user-dto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {
        // this.users.push(user);
        return this.prisma.user.create({ data: user });

        /*{
            /*...user,
            id: this.users.length + 1,
        };*/
    }
}
