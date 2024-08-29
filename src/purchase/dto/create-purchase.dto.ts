import { Type } from "class-transformer";
import { IsArray, IsNumber, ValidateNested } from "class-validator";

class ProductItemDTO {
    @IsNumber()
    productId: number;

    @IsNumber()
    quantity: number;
}

export class CreatePurchaseDTO {
    
    @IsNumber()
    buyerId: number;
    
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductItemDTO)
    products: ProductItemDTO[];
}