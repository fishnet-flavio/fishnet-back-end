import { Exclude } from "class-transformer";

export class ReturnUserDTO {
    id: number;
    name: string;
    email: string;
    password: string;
}