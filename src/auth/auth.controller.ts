import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "src/auth/dto/sign-in.dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post("login")
    async signIn(@Body() signInDTO: SignInDTO) {
        return this.authService.signIn(signInDTO);
    }
}