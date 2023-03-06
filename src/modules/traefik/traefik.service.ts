import { Injectable } from '@nestjs/common';
import { CreateTraefikDto } from './dto/create-traefik.dto';
import { UpdateTraefikDto } from './dto/update-traefik.dto';

@Injectable()
export class TraefikService {
  create(createTraefikDto: CreateTraefikDto) {
    return 'This action adds a new traefik';
  }

  findAll() {
    return `This action returns all traefik`;
  }

  findOne(id: number) {
    return `This action returns a #${id} traefik`;
  }

  update(id: number, updateTraefikDto: UpdateTraefikDto) {
    return `This action updates a #${id} traefik`;
  }

  remove(id: number) {
    return `This action removes a #${id} traefik`;
  }
}
