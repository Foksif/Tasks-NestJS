import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ValidationTypes } from 'class-validator';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async crete(@Body() dto: TaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  async toggleDone(@Param('id') id: string) {
    return this.taskService.toggleDone(id);
  }
}
