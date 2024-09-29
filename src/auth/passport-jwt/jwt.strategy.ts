import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConfig } from "../../configuration/jwt/jwt-config";
import { User } from "../../users/entity/user-entity";
import { AuthService } from "../auth.service";
import { UnauthorizedException } from "@nestjs/common";
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.secret,
    });
  }

  async validate(payload: any): Promise<User> {
    const user: User | null = await this.authService.findUserById(payload.sub);
    if (!user) {
      throw new UnauthorizedException({ message: "User does not exist" });
    }
    return user;
  }
}
