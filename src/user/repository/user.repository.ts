import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class UserRepository {
    constructor() {}

    private users: UserEntity[] = []

    async create(user: CreateUserDTO) : Promise<UserEntity> {
        const newUser = new UserEntity();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;

        this.users.push(newUser);
        return(newUser);
    }

    async findOneById(userId: number) : Promise<UserEntity> {
        return this.users.find(u => u.id === userId);
    }

    async findOneByEmail(email: string) : Promise<UserEntity> {
        return this.users.find(u => u.email === email);
    }
}