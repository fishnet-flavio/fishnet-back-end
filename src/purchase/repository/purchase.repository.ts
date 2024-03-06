import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePurchaseDTO } from "../dto/create-purchase.dto";

@Injectable()
export class PurchaseRepository {
    constructor(private prisma: PrismaService) {}

    async create(purchase: CreatePurchaseDTO) {
        const { buyerId, productId } = purchase
        return await this.prisma.purchase.create({
            data: {
                buyer: {
                    connect: {
                        id: buyerId
                    }
                },
                product: {
                    connect: {
                        id: productId
                    }
                },
            },
        });
    }
    
}