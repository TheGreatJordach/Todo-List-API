import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { Logger } from "@nestjs/common";

export const getDevDatabaseConfig = async (
  configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
  type: "postgres",
  host: configService.get<string>("DATASOURCE_HOST"),
  port: configService.get<number>("DATASOURCE_PORT"),
  username: configService.get<string>("DATASOURCE_USERNAME"),
  password: configService.get<string>("DATASOURCE_PASSWORD"),
  database: configService.get<string>("DATASOURCE_DATABASE"),
  entities: [],
  synchronize: configService.get<boolean>("DATASOURCE_SYNCHRONIZATION"),
  logging: configService.get<boolean>("DATASOURCE_LOGGING"),
});

export const getDevDataSourceFactory = async (options) => {
  const logger = new Logger("Database Config");
  if (!options) {
    logger.fatal("🤬 Options must be provided for database in ModuleConfig");
    throw new Error("DataSourceOption not provided");
  }
  const dataSource = new DataSource(options);
  await dataSource.initialize();
  logger.log("🤘 Connection with Dev Database successfully established");
  return dataSource;
};
