import { validateSync } from "class-validator";

import { plainToInstance } from "class-transformer";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { IsNonEmptyString } from "../../common/decorators/non-empty-string";
import { IsPositiveInteger } from "../../common/decorators/is-positive-integer";

export class EnvValidations {
  @IsNonEmptyString()
  CODECOV_TOKEN: string;
  @IsNonEmptyString()
  DATASOURCE_USERNAME: string;
  @IsNonEmptyString()
  DATASOURCE_PASSWORD: string;
  @IsNonEmptyString()
  DATASOURCE_DATABASE: string;
  @IsNonEmptyString()
  DATASOURCE_HOST: string;
  @IsPositiveInteger()
  DATASOURCE_PORT: number;
  @IsNonEmptyString()
  APP_URL_PREFIX: string;
  @IsPositiveInteger()
  APP_PORT: number;
  @IsNonEmptyString()
  SWAGGER_PATH: string;
  @IsPositiveInteger()
  SALT_ROUNDS: number;
  @IsNonEmptyString()
  JWT_SECRET: string;
}

export function validateEnv(config: Record<string, unknown>) {
  const logger = new Logger("EnvValidations");

  const validated = plainToInstance(EnvValidations, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validated, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    logger.log(`${errors.length} variables failed validation process 🤬`);
    throw new InternalServerErrorException();
  }
  logger.log(`🤘 All Environments variables were successfully loaded `);
  return validated;
}
