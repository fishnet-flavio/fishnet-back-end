import { Body, Controller, Delete, Post } from "@nestjs/common";
import { WishListService } from "./wishlist.service";
import { CreateWishListDTO } from "./dto/create-wishlist.dto";

@Controller("wishlist")
export class WishListController {
    constructor(private wishListService: WishListService) {}

    @Post()
    async create(@Body() wishlist: CreateWishListDTO) {
        return await this.wishListService.create(wishlist); 
    }

    @Delete()
    async remove(@Body() id: number) {
        return await this.wishListService.remove(id);
    }
}