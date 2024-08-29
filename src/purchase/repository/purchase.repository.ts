import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePurchaseDTO } from "../dto/create-purchase.dto";
import { UpdatePurchaseDTO } from "../dto/update-purchase.dto";

@Injectable()
export class PurchaseRepository {
    constructor(private prisma: PrismaService) {}

    async create(purchase: CreatePurchaseDTO) {
        const { buyerId, products } = purchase

        return await this.prisma.purchase.create({
        data: {
        buyer: {
            connect: {
                id: buyerId,
            },
        },
        items: {
            create: products.map((product) => ({
            product: {
                connect: { id: product.productId },
            },
            quantity: product.quantity,
            })),
        },
        },
        include: {
            items: true,
        },
        });
    }
    
    async findAllForUser(id: number) {
        return await this.prisma.purchase.findMany({
            where: { buyerId: id },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
    }

    async findOneById(id: number) {
        return await this.prisma.purchase.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
    }

    async update(id: number, newData: UpdatePurchaseDTO) {
        return await this.prisma.purchase.update({
            where: { id },
            data: newData,
        });
    }
}