import { ReturnVendorDTO } from "src/user/dto/return-vendor.dto";

export class ReturnProductDTO {
    id: number;
    price: number;
    name: string;
    stock: number;
    description: string;
    announcedAt: Date;
    updatedAt: Date;
    vendor: ReturnVendorDTO;
    rating?: number;
    wishlist?: any[];
}