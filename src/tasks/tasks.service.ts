import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor( private prisma: PrismaService){}
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data:{
        name:createTaskDto.name
      }
    })
  }

  findAll() {
    return this.prisma.task.findMany()
  }
}
