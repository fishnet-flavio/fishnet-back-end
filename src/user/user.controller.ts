import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() user: CreateUserDTO) {
        return await this.userService.create(user);
    }

    @Get("/:id")
    async getOneById(@Param("id") id: string) {
        return await this.userService.getOneByID(Number(id));
    }
}