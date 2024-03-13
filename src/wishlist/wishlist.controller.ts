import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { WishListService } from "./wishlist.service";
import { CreateWishListDTO } from "./dto/create-wishlist.dto";

@Controller("wishlist")
export class WishListController {
    constructor(private wishListService: WishListService) {}

    @Post()
    async create(@Body() wishlist: CreateWishListDTO) {
        return await this.wishListService.create(wishlist); 
    }

    @Get(":/id")
    async getAllFromUser(@Param("id") id: number) {
        return await this.wishListService.getAllFromUser(id);
    }

    @Delete(":/productId:/userId")
    async remove(@Param("productId") productId : number, @Param("userId") userId: number) {
        return await this.wishListService.remove({ userId, productId } as CreateWishListDTO);
    }
}