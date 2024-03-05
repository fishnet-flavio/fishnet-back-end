import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDTO {

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

    @IsNotEmpty()
    vendorId: number;
}