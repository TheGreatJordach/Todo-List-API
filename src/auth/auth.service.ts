import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { SignUpDto } from "../users/dto/sign-up.dto";
import { UserService } from "../users/user.service";
import { PasswordProvider } from "./password/password.provider";

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger("AuthService");
  constructor(
    private readonly userService: UserService,
    private readonly passwordProvider: PasswordProvider
  ) {}

  async register(signUpDto: SignUpDto) {
    // hash the password

    const hashedPassword: string = await this.passwordProvider.hashPassword(
      signUpDto.password
    );

    if (!hashedPassword) {
      throw new UnauthorizedException({ message: "Invalid password" });
    }
    // create new user with hashedPassword
    return this.userService.createNew({
      ...signUpDto,
      password: hashedPassword,
    });
    // generate the token
    // return the token
  }
}
