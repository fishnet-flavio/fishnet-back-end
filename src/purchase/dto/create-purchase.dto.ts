import { IsNumber } from "class-validator";

export class CreatePurchaseDTO {
    
    @IsNumber()
    buyerId: number;
    
    @IsNumber()
    productId: number;
}