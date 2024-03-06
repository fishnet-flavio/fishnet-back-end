import { Module } from "@nestjs/common";
import { PurchaseController } from "./purchase.controller";
import { PurchaseService } from "./purchase.service";
import { PurchaseRepository } from "./repository/purchase.repository";

@Module({
    controllers: [PurchaseController],
    providers: [PurchaseService, PurchaseRepository],
    exports: [PurchaseService]
})
export class PurchaseModule {}