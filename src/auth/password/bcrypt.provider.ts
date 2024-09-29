import { HashAlgoInterface } from "./hash-algo.interface";
import * as bcrypt from "bcrypt";
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

/**
 * BcryptProvider class that implements HashAlgoInterface for hashing and comparing passwords.
 * @constructor
 * @param {ConfigService} configService - The configuration service for retrieving salt rounds.
 * @method compare - Compares a plain text password with an encrypted password.
 * @method hash - Hashes a plain text password.
 */
@Injectable()
export class BcryptProvider implements HashAlgoInterface {
  /**
   * Logger instance for error tracking and debugging.
   * @private
   */
  private readonly logger = new Logger("HashAlgoProvider");
  /**
   * Creates a new instance of BcryptProvider.
   * @param {ConfigService} configService - The service to access configuration variables.
   */
  constructor(private readonly configService: ConfigService) {}
  /**
   * Number of salt rounds for bcrypt hashing.
   * This value is fetched from the environment configuration.
   * @private
   */
  private readonly saltRounds = parseInt(process.env.SALT_ROUNDS);
  /**
   * Compares the given data with the encrypted password.
   * @param {string | Buffer} data - The plain text or buffer to compare.
   * @param {string} encrypted - The hashed password to compare against.
   * @returns {Promise<boolean>} - True if the data matches the encrypted value.
   * @throws {InternalServerErrorException} If the comparison fails.
   */
  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    try {
      return await bcrypt.compare(data, encrypted);
    } catch (error) {
      this.logger.error(`${error.code}, ${error.message}`);
      this.logger.error(error.stack);
      throw new InternalServerErrorException({
        message: "Failed to compare passwords",
      });
    }
  }

  /**
   * Asynchronously hashes the provided data using bcrypt with a dynamically generated salt based on the configured number of salt rounds.
   *
   * @param {string | Buffer} data - The plain text or buffer data to be hashed.
   * @returns {Promise<string>} A promise that resolves with the hashed data.
   * @throws {InternalServerErrorException} If an error occurs during the hashing process.
   */
  async hash(data: string | Buffer): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(this.saltRounds);
      return await bcrypt.hash(data, salt);
    } catch (error) {
      this.logger.error(`${error.code}, ${error.message}`);
      this.logger.error(error.stack);
      throw new InternalServerErrorException({
        message: "Failed to hash passwords",
      });
    }
  }
}
