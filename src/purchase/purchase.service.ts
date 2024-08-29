import { Injectable } from "@nestjs/common";
import { CreatePurchaseDTO } from "./dto/create-purchase.dto";
import { PurchaseRepository } from "./repository/purchase.repository";

@Injectable()
export class PurchaseService {
    constructor(private purchaseRepository: PurchaseRepository) {}

    async create(purchase: CreatePurchaseDTO) {
        return await this.purchaseRepository.create(purchase);
    }

    async findAllForUser(id: number) {
        return await this.purchaseRepository.findAllForUser(id);
    }

    async findOneById(id: number) {
        return await this.purchaseRepository.findOneById(id);
    }
}