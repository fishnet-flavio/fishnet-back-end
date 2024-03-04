import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDTO {

    @IsNotEmpty()
    vendorId: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    stock: number;

    @IsNotEmpty()
    description: string;
}