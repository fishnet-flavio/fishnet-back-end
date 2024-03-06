import { Body, Controller, Post } from "@nestjs/common";
import { PurchaseService } from "./purchase.service";
import { CreatePurchaseDTO } from "./dto/create-purchase.dto";

@Controller("purchase")
export class PurchaseController {
    constructor(private purchaseService: PurchaseService) {}

    @Post()
    async create(@Body() purchase: CreatePurchaseDTO) {
        return this.purchaseService.create(purchase);
    }
}