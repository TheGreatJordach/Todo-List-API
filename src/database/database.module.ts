import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  getDevDatabaseConfig,
  getDevDataSourceFactory,
} from "../configuration/database/dev-database.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDevDatabaseConfig,
      dataSourceFactory: getDevDataSourceFactory,
    }),
  ],
})
export class DatabaseModule {}
