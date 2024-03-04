import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./repository/product.repository";
import { CreateProductDTO } from "./dto/create-product.dto";
import { ProductEntity } from "./entity/product.entity";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async create(product: CreateProductDTO) : Promise<ProductEntity> {
        return await this.productRepository.create(product);
    }

    async getAll() : Promise<ProductEntity[]> {
        return await this.productRepository.getAll();
    }

    async getOneById(productId: number) : Promise<ProductEntity> {
        return await this.productRepository.getOneById(productId);
    }
}