import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TraefikModule } from './modules/traefik/traefik.module';

@Module({
  imports: [TraefikModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
