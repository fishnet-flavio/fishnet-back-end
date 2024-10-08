import { Injectable } from "@nestjs/common";
import { CreateProductDTO } from "../dto/create-product.dto";
import { UpdateProductDTO } from "../dto/update-product.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ReturnProductDTO } from "../dto/return-product.dto";

@Injectable()
export class ProductRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(product: CreateProductDTO) {
        const { price, name, stock, description, image, vendorId } = product;
        return await this.prisma.product.create({
            data:{
                price,
                name,
                stock,
                description,
                image,
                vendor: {
                    connect: {
                        id: vendorId
                    },
                },
        }});
    }

    async getAll()  {
        const product = await this.prisma.product.findMany({
            include: {
                vendor: {
                    include: {
                        user: true
                    },
                },
                wishLists: true,
            },
        });
        if (product) {
            product.forEach(p => {
                delete p.vendor.user.password;
            });
        }
        return product;
    }

    async getOneById(id: number) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                vendor: {
                    include: {
                        user: true
                    },
                },
                wishLists: true,
                sales: true
            },
        });
        if (product) {
            delete product.vendor.user.password;
        }

        return product;
    }

    async getAllFromUser(id: number) : Promise<ReturnProductDTO[]> {
        const product = await this.prisma.product.findMany({
            where: { vendorId: id },
            include: {
                vendor: {
                    include: {
                        user: true
                    },
                },
            },
        }) as ReturnProductDTO[];
        if (product) {
            product.forEach(p => {
                delete p.vendor.user.password;
            });
        }
        return product;
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