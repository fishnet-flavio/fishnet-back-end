import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateWishListDTO } from "../dto/create-wishlist.dto";

@Injectable()
export class WishListRepository {
    constructor(private prisma : PrismaService) {}

    async create(wishlist: CreateWishListDTO) {
        return await this.prisma.wishlist.create({
            data: {
                user: {
                    connect: {
                        id: wishlist.userId
                    },
                },
                product: {
                    connect: {
                        id: wishlist.productId
                    },
                },
            },
        });
    }


    async remove(wishList: CreateWishListDTO) {
        return await this.prisma.wishlist.deleteMany({
            where: { 
                productId: wishList.productId,
                userId: wishList.userId
            },
        });
    }
}