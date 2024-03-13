import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "src/auth/dto/sign-in.dto";
import { Public } from "./decorator/public.decorator";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("login")
    async signIn(@Body() signInDTO: SignInDTO) {
        return this.authService.signIn(signInDTO);
    }

    @Get("profile")
    getProfile(@Request() req) {
        return req.user;
    }
}