import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user-entity";
import { QueryFailedError, Repository } from "typeorm";
import { SignUpDto } from "./dto/sign-up.dto";

@Injectable()
export class UserService {
  private readonly logger = new Logger("UserService");
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  /**
   * Creates a new user based on the provided SignUpDto.
   *
   * @param signUpDto The data transfer object containing user details for sign-up.
   * @returns A promise that resolves with the newly created user.
   * @throws If there is an error during the creation process, it handles QueryFailedError by throwing an InternalServerErrorException with a specific message.
   * Otherwise, it logs the error details and throws an HttpException indicating the failure to save the new user.
   */
  async createNew(signUpDto: SignUpDto) {
    try {
      const user = this.userRepository.create(signUpDto);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        this.logger.log(error.message);
        throw new InternalServerErrorException({
          message: "The email your provided is already used 😂",
        });
      }
      this.logger.error(`${error.code}, ${error.message}`);
      this.logger.error(error.stack);
      throw new HttpException(
        "Failed to save new user",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async IsEmailUsed(email: string): Promise<boolean> {
    try {
      const count: number = await this.userRepository.count({
        where: { email },
      });
      return count > 0;
    } catch (error) {
      console.log(error.code);
      throw new InternalServerErrorException();
    }
  }
}
