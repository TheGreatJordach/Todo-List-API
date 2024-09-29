import { Module } from "@nestjs/common";
import { ConfigurationModule } from "./configuration/configuration.module";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./users/users.module";
import { TodosModule } from "./todos/todos.module";

@Module({
  imports: [ConfigurationModule, DatabaseModule, UsersModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
