import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [PrismaService, TaskService],
})
export class TaskModule {}
