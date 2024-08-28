import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsOptional()
    profilePicture?: Buffer;

    @IsNotEmpty()
    @IsBoolean()
    isVendor: boolean = false;
}