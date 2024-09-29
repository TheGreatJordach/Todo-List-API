import { AuthGuard } from "@nestjs/passport";
import { UnauthorizedException } from "@nestjs/common";

export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(err: unknown, user) {
    if (err || !user) {
      throw new UnauthorizedException({ message: "Unauthorized" });
    }
    return user;
  }
}
