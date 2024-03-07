import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePurchaseDTO } from "../dto/create-purchase.dto";
import { UpdatePurchaseDTO } from "../dto/update-purchase.dto";

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
    
    async findAll() {
        return await this.prisma.purchase.findMany();
    }

    async findOneById(id: number) {
        return await this.prisma.purchase.findUnique({
            where: { id },
        });
    }

    async update(id: number, newData: UpdatePurchaseDTO) {
        return await this.prisma.purchase.update({
            where: { id },
            data: newData,
        });
    }
}