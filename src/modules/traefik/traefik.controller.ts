import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { TraefikService } from './traefik.service';
import { CreateTraefikDto } from './dto/create-traefik.dto';
import { UpdateTraefikDto } from './dto/update-traefik.dto';

@Controller()
export class TraefikController {
  constructor(private readonly traefikService: TraefikService) {}

  @GrpcMethod('TraefikService', 'Ping')
  ping(data) {
    return data;
  }

  @MessagePattern('createTraefik')
  create(@Payload() createTraefikDto: CreateTraefikDto) {
    return this.traefikService.create(createTraefikDto);
  }

  @MessagePattern('findAllTraefik')
  findAll() {
    return this.traefikService.findAll();
  }

  @MessagePattern('findOneTraefik')
  findOne(@Payload() id: number) {
    return this.traefikService.findOne(id);
  }

  @MessagePattern('updateTraefik')
  update(@Payload() updateTraefikDto: UpdateTraefikDto) {
    return this.traefikService.update(updateTraefikDto.id, updateTraefikDto);
  }

  @MessagePattern('removeTraefik')
  remove(@Payload() id: number) {
    return this.traefikService.remove(id);
  }
}
