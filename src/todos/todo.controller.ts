import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/passport-jwt/jwt-auth.guard";
import { CreateTodoDto } from "./dto/create-todo.dto";

@UseGuards(JwtAuthGuard)
@Controller("todos")
export class TodoListController {
  @Post()
  newTask(@Body() createTodoDto: CreateTodoDto) {
    return `this will create new Todo $${JSON.stringify(createTodoDto)} via protected  route by JWT`;
  }
}
