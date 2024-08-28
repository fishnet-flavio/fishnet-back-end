import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateShoppingCartDTO } from './dto/create-shoppingcart.dto';
import { ShoppingCartService } from './shoppingcart.service';

@Controller("shoppingcart")
export class ShoppingCartController {
    constructor (private readonly service: ShoppingCartService) {}

    @Post()
    async create(@Body() shoppingcart: CreateShoppingCartDTO) {
        return await this.service.create(shoppingcart);
    }

    @Put("/:id")
    async update(@Param("id") id, @Body() shoppingcart: CreateShoppingCartDTO) {
        return await this.service.update(id, shoppingcart);
    }

    @Delete("/:id")
    async delete(@Param("id") id) {
        return await this.service.delete(id);
    }

}
