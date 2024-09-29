import { BcryptProvider } from "./bcrypt.provider";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PasswordProvider {
  constructor(private readonly bcrypt: BcryptProvider) {}

  async comparePassword(data: string | Buffer, encrypted: string) {
    return await this.bcrypt.compare(data, encrypted);
  }

  /**
   * Asynchronously hashes the provided data using bcrypt.
   *
   * @param {string | Buffer} data - The plain text or buffer data to be hashed.
   * @returns {Promise<string>} A promise that resolves with the hashed data.
   * @throws {InternalServerErrorException} If an error occurs during the hashing process.
   *
   * Note: The bcrypt. Hash method actually implements error handling internally, so additional error handling is not required in this method.
   */
  async hashPassword(data: string | Buffer): Promise<string> {
    return await this.bcrypt.hash(data);
  }
}
