import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { WishListService } from "./wishlist.service";
import { CreateWishListDTO } from "./dto/create-wishlist.dto";
import { Public } from "src/auth/decorator/public.decorator";

@Controller("wishlist")
export class WishListController {
    constructor(private wishListService: WishListService) {}

    @Post()
    @Public()
    async create(@Body() wishlist: CreateWishListDTO) {
        return await this.wishListService.create(wishlist); 
    }

    @Delete()
    async remove(@Body() userId: number, productId: number) {
        return await this.wishListService.remove({ userId, productId } as CreateWishListDTO);
    }
}