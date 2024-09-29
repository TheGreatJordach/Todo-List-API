import { registerDecorator, ValidationOptions } from "class-validator";

export function IsPositiveInteger(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isPositiveInteger",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: unknown): Promise<boolean> | boolean {
          return typeof value === "number" && value > 0;
        },
      },
    });
  };
}
