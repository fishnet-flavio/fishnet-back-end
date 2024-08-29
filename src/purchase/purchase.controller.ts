import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PurchaseService } from "./purchase.service";
import { CreatePurchaseDTO } from "./dto/create-purchase.dto";

@Controller("purchase")
export class PurchaseController {
    constructor(private purchaseService: PurchaseService) {}

    @Post()
    async create(@Body() purchase: CreatePurchaseDTO) {
        return this.purchaseService.create(purchase);
    }

    @Get("/user/:id")
    async findAllFromUser(@Param("id") id : number) {
        return this.purchaseService.findAllForUser(Number(id));
    }

    @Get("/:id")
    async findOneById(@Param("id") id: number) {
        return this.purchaseService.findOneById(id);
    }
}