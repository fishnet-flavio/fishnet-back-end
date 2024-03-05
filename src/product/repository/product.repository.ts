import { Injectable } from "@nestjs/common";
import { ProductEntity } from "../entity/product.entity";
import { CreateProductDTO } from "../dto/create-product.dto";
import { UpdateProductDTO } from "../dto/update-product.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(product: CreateProductDTO) {
        const { price, name, stock, description, vendorId } = product;
        return await this.prisma.product.create({
            data:{
                price,
                name,
                stock,
                description,
                vendor: {
                    connect: {
                        id: vendorId
                    },
                },
        }});
    }

    async getAll()  {
        return await this.prisma.product.findMany({
            include: {
                vendor: {
                    include: {
                        user: true
                    },
                },
            },
        });
    }

    async getOneById(id: number) {
        return await this.prisma.product.findUnique({
            where: { id },
            include: {
                vendor: {
                    include: {
                        user: true
                    },
                },
            },
        });
    }

    async updateOneById(id: number, newInfo: UpdateProductDTO) {
        return await this.prisma.product.update({
            where: { id },
            data: newInfo
        })
    }

    async deleteOneById(id: number) {
        return await this.prisma.product.delete({
            where: { id }
        });
    }
}