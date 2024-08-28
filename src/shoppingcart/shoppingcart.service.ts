import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDTO } from './dto/create-shoppingcart.dto';
import { ShoppingCartRepository } from './repository/shoppingcart.repository';

@Injectable()
export class ShoppingCartService {
    constructor(private readonly repository: ShoppingCartRepository) {}

    async create(shoppingcart: CreateShoppingCartDTO) {
        return await this.repository.create(shoppingcart);
    }

    async update(id: number, newShoppingCart: CreateShoppingCartDTO) {
        return await this.repository.update(id, newShoppingCart);
    }

    async delete(id: number) {
        return await this.repository.delete(id);
    }
}
