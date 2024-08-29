import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
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
    async remove(@Query("userId") userId: number, @Query("productId") productId: number) {
        const parsedUserId = Number(userId);
        const parsedProductId = Number(productId);
        return await this.wishListService.remove({ userId: parsedUserId, productId: parsedProductId } as CreateWishListDTO);
    }
}