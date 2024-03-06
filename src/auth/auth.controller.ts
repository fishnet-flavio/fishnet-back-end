import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "src/auth/dto/sign-in.dto";
import { AuthGuard } from "./guard/auth.guard";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post("login")
    async signIn(@Body() signInDTO: SignInDTO) {
        return this.authService.signIn(signInDTO);
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
        return req.user
    }
}