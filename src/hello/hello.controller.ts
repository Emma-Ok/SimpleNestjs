import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Res, UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Response, Request, query } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller()
export class HelloController {
    // Sintaxis Express
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({ message: 'Hello World' });
    }
    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return 'This is a new route';
    }


    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return 'This page is not found 404';
    }
    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'This page is error 500';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        console.log(num);
        return `The ticket number is ${num}`;
    }
    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        if (status) {
            return 'The user is active';
        } else {
            return 'The user is not active';
        }
    }
    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, you are ${query.age} years old`;
    }


}