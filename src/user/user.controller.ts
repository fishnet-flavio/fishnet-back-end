import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { Public } from "src/auth/decorator/public.decorator";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Public()
    @Post()
    @UseInterceptors(FileInterceptor("profilePicture"))
    async createUser(@Body() body: any, @UploadedFile() file: any) {
        const { name, email, password, isVendor } = body;
        const user: CreateUserDTO = {
            name,
            email,
            password,
            isVendor,
            profilePicture: file?.buffer
        };
        
        return await this.userService.create(user);
    }

    @Public()
    @Get("/:id")
    async getOneById(@Param("id") id: number) {
        return await this.userService.getOneByID(id);
    }

    @Public()
    @Get("/:id/wishlist")
    async getAllWishlistFromUser(@Param("id") id: number) {
        return await this.userService.getAllWishlistFromUser(id);
    }

    @Public()
    @Get("/:id/shoppingcart")
    async getAllShoppingCartFromUser(@Param("id") id: number) {
        return await this.userService.getAllShoppingCartFromUser(id);
    }

    @Patch("/:id")
    async update(@Param("id") id: number, @Body() newData: UpdateUserDTO) {
        return await this.userService.update(id, newData);
    }

    @Delete("/:id")
    async delete(@Param("id") id: number) {
        return await this.userService.delete(id);
    }
}