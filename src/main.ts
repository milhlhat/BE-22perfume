import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  /**
   * prefix for all routes
   */
  app.setGlobalPrefix('api');

  /**
   * Swagger
   * link to swagger : http://localhost:3030/docs/swagger/
   */
  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/swagger', app, document);

  await app.listen(3030);
}
bootstrap();
