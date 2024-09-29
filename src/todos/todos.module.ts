import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./entity/todo-entity";

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodosModule {}
