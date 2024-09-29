import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";

import { SignUpDto } from "../users/dto/sign-up.dto";
import { AuthService } from "./auth.service";
import { LoginDto } from "../users/dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  registration(@Body() signUpDto: SignUpDto) {
    return this.authService.register(signUpDto);
  }

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUserCredentials(loginDto);
    if (!user) {
      throw new UnauthorizedException({ message: "Unauthorized" });
    }
    return this.authService.generateTokenAndLogin(user);
  }
}
