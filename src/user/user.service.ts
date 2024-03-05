import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repository/user.repository";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create (user: CreateUserDTO) {
        return await this.userRepository.create(user);
    }

    async getOneByID(id: number) {
        return await this.userRepository.findOneById(id);
    }

    async getOneByEmail(email: string) {
        return await this.userRepository.findOneByEmail(email);
    }
}