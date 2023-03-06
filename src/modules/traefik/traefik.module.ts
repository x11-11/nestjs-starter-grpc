import { Module } from '@nestjs/common';
import { TraefikService } from './traefik.service';
import { TraefikController } from './traefik.controller';

@Module({
  controllers: [TraefikController],
  providers: [TraefikService],
})
export class TraefikModule {}
