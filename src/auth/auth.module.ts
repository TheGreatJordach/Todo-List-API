import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { PasswordProvider } from "./password/password.provider";
import { BcryptProvider } from "./password/bcrypt.provider";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "../configuration/jwt/jwt-config";
import { JwtAuthGuard } from "./passport-jwt/jwt-auth.guard";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: jwtConfig.expireIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PasswordProvider, BcryptProvider, JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
