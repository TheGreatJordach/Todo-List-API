import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user-entity";
import { Repository } from "typeorm";
import { SignUpDto } from "./dto/sign-up.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  createUser(signUpDto: SignUpDto) {
    return `This service will create un new user with ${JSON.stringify(signUpDto)}`;
  }
}
