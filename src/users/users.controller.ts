import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly UserService:UsersService){}
    @Get()
    findAll(){
        return this.UserService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id:string){
       return this.UserService.findOne(+id)
    }

    @Post()
    create(@Body() payload:createUserDto){
        console.log("PAYLOAD ->",payload)
            return this.UserService.createUser(payload)
    }
}
