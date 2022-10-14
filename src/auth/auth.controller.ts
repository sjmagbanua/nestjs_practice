import { Controller, Post, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    //nestjs well handle on itself to instantiate
    constructor(private authService: AuthService) {}
        // this.authService.test(); dependency injection
    @Post('signup')
    signup() {
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}
