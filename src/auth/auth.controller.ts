import { Body, Controller, Post } from "@nestjs/common";

import { SignUpDto } from "../users/dto/sign-up.dto";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(":register")
  registration(@Body() signUpDto: SignUpDto) {
    return this.authService.register(signUpDto);
  }
}
