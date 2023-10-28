import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data:{
        email:createUserDto.email,
        password: createUserDto.password
      }
    })  
  }
  
  getUserByEmail(email:string){
    return this.prisma.user.findFirst({
      where:{
        email:email
      }
    })
  }

}
