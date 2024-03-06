import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignInDTO } from "src/auth/dto/sign-in.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}

    async signIn(loginData: SignInDTO): Promise<{ acess_token: string }> {
        const user = await this.userService.getOneByEmail(loginData.email);
        if (user?.password !== loginData.password) {
            throw new UnauthorizedException();
        }
        const payload = { id: user.id, username: user.name, email: user.email };
        return {
            acess_token: await this.jwtService.signAsync(payload),
        };
    }
}