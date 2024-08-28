import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateShoppingCartDTO {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    productId: number;

    @IsNotEmpty()
    @IsNumber()
    ammount: number;
}