import { User } from "../../users/entity/user-entity";
import { IsNonEmptyString } from "../../common/decorators/non-empty-string";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class BaseTodoDto {
  @IsNonEmptyString()
  readonly title: string;
  @IsNonEmptyString()
  readonly description: string;
  @Type(() => User)
  @ValidateNested()
  readonly user: User;
}
