import { Injectable } from "@nestjs/common";
import { ProductEntity } from "../entity/product.entity";
import { CreateProductDTO } from "../dto/create-product.dto";
import { UpdateProductDTO } from "../dto/update-product.dto";

@Injectable()
export class ProductRepository {
    constructor() {}

    private products: ProductEntity[] = []

    async create(product: CreateProductDTO) : Promise<ProductEntity> {
        const newProduct = new ProductEntity;
        newProduct.id = 2
        newProduct.price = product.price;
        newProduct.name = product.name;
        newProduct.description = product.description;
        newProduct.stock = product.stock;
        this.products.push(newProduct);

        return newProduct;
    }

    async getAll() : Promise<ProductEntity[]> {
        return this.products;
    }

    async getOneById(productId: number) : Promise<ProductEntity> {
        return this.products.find(p => p.id === productId);
    }

    async updateOneById(productId: number, newInfo: UpdateProductDTO) {
        
    }

    async deleteOneById(productId: number) {
        this.products.filter(p => p.id !== productId);
    }
}