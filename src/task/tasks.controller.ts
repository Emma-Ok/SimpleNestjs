import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
        // ejecutar logica de negocio
    }

    @Get('/:id') // parametro de la ruta
    getTask(@Param('id') id: string) {
        console.log(id);
        return this.tasksService.getTask(parseInt(id));
        // ejecutar logica de negocio
    }

    @Post()
    @ApiOperation({ summary: 'Create a task' })
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto) {
        console.log(task)
        return this.tasksService.createTask(task);
        // ejecutar logica de negocio
    }
    @Put()
    updateTask(@Body() task: UpdateTaskDto) {

        return this.tasksService.updateTask(task);
        // ejecutar logica de negocio
    }
    @Delete()
    deleteTask() {

        return this.tasksService.deleteTask();
        // ejecutar logica de negocio
    }
    @Patch()
    updateTaskStatus() {

        return this.tasksService.updateTaskStatus();
        // ejecutar logica de negocio
    }


}
