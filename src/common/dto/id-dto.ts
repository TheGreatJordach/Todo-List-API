import { IsPositiveInteger } from "../decorators/is-positive-integer";

export class IdDto {
  @IsPositiveInteger()
  readonly id: number;
}
