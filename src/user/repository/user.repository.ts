import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserEntity } from "../entity/user.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "../dto/update-user.dto";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(user: CreateUserDTO) {
        const { name, email, password, profilePicture, isVendor } = user;
        
        if(isVendor) {
            return await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                    profilePicture,
                    vendor: {
                        create: {},
                    },
                },
            });
        } else {
            return await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password
                },
            });
        }
    }

    async findOneById(id: number) {
        return await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                vendor: {
                    include: {
                        products: true,
                    },
                },
                wishList: {
                    select: {
                        id: true
                    }
                },
            },
        });
    }

    async findOneByEmail(email: string) : Promise<UserEntity> {
        return this.prisma.user.findUnique({
            where: { email }
        });
    }

    async getAllShoppingCartFromUser(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                shoppingCart: true
            }
        })
    }

    async getAllWishlistFromUser(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                wishList: true
            }
        })
    }

    async update(id: number, newData: UpdateUserDTO) {
        return await this.prisma.user.update({
            where: { id },
            data: newData
        });
    }

    async delete(id: number) {
        return await this.prisma.user.delete({
            where: { id }
        });
    }
}