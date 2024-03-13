import { Injectable } from "@nestjs/common";
import { WishListRepository } from "./repository/wishlist.repository";
import { CreateWishListDTO } from "./dto/create-wishlist.dto";

@Injectable()
export class WishListService {
    constructor(private wishListRepository: WishListRepository) {}

    async create(wishList: CreateWishListDTO) {
        return await this.wishListRepository.create(wishList);
    }

    async getAllFromUser(id: number) {
        return await this.wishListRepository.getAllFromUser(id);
    }

    async remove(wishList: CreateWishListDTO) {
        return await this.wishListRepository.remove(wishList);
    }
}