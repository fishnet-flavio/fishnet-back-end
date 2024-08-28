import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shoppingcart.controller';
import { ShoppingCartService } from './shoppingcart.service';
import { ShoppingCartRepository } from './repository/shoppingcart.repository';

@Module({
    controllers: [ShoppingCartController],
    providers: [ShoppingCartService, ShoppingCartRepository],
    exports: [ShoppingCartService]
})
export class ShoppingCartModule {}
