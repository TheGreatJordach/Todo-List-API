import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { SignUpDto } from "../users/dto/sign-up.dto";
import { UserService } from "../users/user.service";
import { PasswordProvider } from "./password/password.provider";

import { User } from "../users/entity/user-entity";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "../users/dto/login.dto";

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger("AuthService");
  constructor(
    private readonly userService: UserService,
    private readonly passwordProvider: PasswordProvider,
    private readonly jwtService: JwtService
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
    const newUser: User = await this.userService.createNew({
      ...signUpDto,
      password: hashedPassword,
    });
    if (!newUser) {
      this.logger.log("Failed to create a new user");
      throw new HttpException(
        "Invalid password",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    // generate the token
    return await this.generateTokenAndLogin(newUser);
  }

  async findUserById(id: number): Promise<User> {
    try {
      return await this.userService.findOneById(id);
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw new UnauthorizedException("authorization denied");
      }
      throw new InternalServerErrorException(
        "An unexpected error occurred while checking user existence."
      );
    }
  }

  async validateUserCredentials(loginDto: LoginDto): Promise<User> {
    const storedUser: User | null = await this.userService.findUserByEmail(
      loginDto.email
    );
    if (!storedUser) {
      return null;
    }
    const isValidPassword = await this.passwordProvider.comparePassword(
      loginDto.password,
      storedUser.password
    );
    if (!isValidPassword) {
      return null;
    }
    return storedUser;
  }

  async generateTokenAndLogin(user: User): Promise<{ token: string }> {
    const payload = { sub: user.id, username: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
