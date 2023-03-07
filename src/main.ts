import fs from 'fs';
import path from 'path';
import { NestFactory, NestApplication } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import {
  Transport,
  MicroserviceOptions,
  GrpcOptions,
} from '@nestjs/microservices';
import { configService } from './common/config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const httpPort = configService.get('PORT', false) || 8080;
  const grpcPort = configService.get('GRPC_PORT', false) || 8888;
  const grpcOptions: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${grpcPort}`, //grpc requires domain name host(for http2 cert)
      package: ['traefik'],
      protoPath: [__dirname + '/proto/modules/traefik.proto'],
    },
  };
  //main http
  const app: NestApplication = await NestFactory.create(AppModule);
  //grpc connection
  app.connectMicroservice<MicroserviceOptions>(grpcOptions);

  await setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.startAllMicroservices();
  await app.listen(httpPort);

  Logger.log(`Application is running on: ${await app.getUrl()}`);
  Logger.log(`Grpc is running on: ${grpcOptions.options.url}`);
}
bootstrap();
/**
 */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'),
);

async function setupSwagger(app: NestApplication) {
  const { name, version, description } = packageJson;
  const swaggerConfig = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    //.addTag('theapp')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
}
