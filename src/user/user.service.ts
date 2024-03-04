import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repository/user.repository";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create (user: CreateUserDTO) : Promise<UserEntity> {
        return await this.userRepository.create(user);
    }
}