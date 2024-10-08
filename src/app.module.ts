import { Module } from "@nestjs/common";
import { ConfigurationModule } from "./configuration/configuration.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
