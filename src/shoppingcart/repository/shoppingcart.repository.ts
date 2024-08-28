import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateShoppingCartDTO } from "../dto/create-shoppingcart.dto";

@Injectable()
export class ShoppingCartRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(shoppingcart: CreateShoppingCartDTO) {
        const { userId, productId, ammount } = shoppingcart

        return await this.prisma.shoppingCart.create({
            data: {
                userId,
                productId,
                ammount,
            }
        });
    }

    async update(id: number, newShoppingCart: CreateShoppingCartDTO) {
        return await this.prisma.shoppingCart.update({
            where: { id },
            data: newShoppingCart
        });
    }

    async delete(id: number) {
        return await this.prisma.shoppingCart.delete({
            where: { id }
        })
    }
}