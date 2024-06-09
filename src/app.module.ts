import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_SYNC,
  DB_USERNAME,
} from './app.constants';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>(DB_HOST, 'localhost'),
        port: configService.get<number>(DB_PORT, 5432),
        username: configService.get<string>(DB_USERNAME),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>(DB_SYNC),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
