import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){};

    @Get()
    getUsers(){
        console.log(process.env.APP_NAME);
        this.usersService.getUsers();
    }

    @Get(":id") 
    getUser(@Param("id") id: string){
        return `user ${id}`;
    }

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return "successfull validation";
    }

    @Patch(":id")
    updateUser(@Param("id") id: string, @Body() body: UpdateUserDto){
        return {
            id,
            body
        }
    }

    @Delete(":id")
    deteleUser(@Param("id") id: string){
        return `delete user ${id} successfully`
    }
}
