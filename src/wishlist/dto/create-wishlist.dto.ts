import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateWishListDTO {
    @IsNotEmpty()
    @IsNumber()
    userId: number;
    
    @IsNotEmpty()
    @IsNumber()
    productId: number;
}