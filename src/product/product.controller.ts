import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/create-product.dto";

@Controller("product")
export class ProductController {
    constructor(private readonly productService : ProductService) {}
    
    @Post()
    async create(@Body() product : CreateProductDTO) {
        return await this.productService.create(product);
    }

    @Get()
    async getAll() {
        return await this.productService.getAll();
    }

    @Get()
    async getOneById(@Body() productId: number) {
        return await this.productService.getOneById(productId);
    }
}
