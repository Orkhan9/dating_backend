import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { PORT } from './app.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get<number>(PORT) || 3001;
  await app.listen(port);
}

bootstrap()
  .then(() =>
    console.log('app started successfully on port ' + process.env.PORT),
  )
  .catch((error) => console.log('app could not start ', error));
