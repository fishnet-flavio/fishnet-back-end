import { ReturnUserDTO } from "./return-user.dto";

export class ReturnVendorDTO {
    id: number;
    rating: number;
    user: ReturnUserDTO;
}