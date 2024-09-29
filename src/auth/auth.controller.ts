import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { SignUpDto } from "../users/dto/sign-up.dto";

@Controller()
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post()
  registration(@Body() signUpDto: SignUpDto) {
    return this.userService.createUser(signUpDto);
  }
}
