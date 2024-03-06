import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { Public } from "src/auth/decorator/public.decorator";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Public()
    @Post()
    async createUser(@Body() user: CreateUserDTO) {
        return await this.userService.create(user);
    }

    @Public()
    @Get("/:id")
    async getOneById(@Param("id") id: string) {
        return await this.userService.getOneByID(Number(id));
    }
}