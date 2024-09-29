import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { PasswordProvider } from "./password/password.provider";
import { BcryptProvider } from "./password/bcrypt.provider";

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, PasswordProvider, BcryptProvider],
})
export class AuthModule {}
