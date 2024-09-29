import { IsNonEmptyString } from "../../common/decorators/non-empty-string";
import { Todo } from "../../todos/entity/todo-entity";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

export class BaseUserDto {
  @IsNonEmptyString()
  readonly name: string;
  @IsNonEmptyString()
  readonly email: string;
  @Type(() => Todo)
  @ValidateNested({ each: true })
  readonly todos: Todo[];
}
