import { Module } from "@nestjs/common";
import { WishListController } from "./wishlist.controller";
import { WishListService } from "./wishlist.service";
import { WishListRepository } from "./repository/wishlist.repository";

@Module({
    controllers: [WishListController],
    providers: [WishListService, WishListRepository],
    exports: [WishListService]
})
export class WishListModule {}