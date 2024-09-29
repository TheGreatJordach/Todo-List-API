import { OmitType } from "@nestjs/mapped-types";
import { SignUpDto } from "./sign-up.dto";

export class LoginDto extends OmitType(SignUpDto, ["name", "todos"]) {}
