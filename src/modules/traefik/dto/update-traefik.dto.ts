import { PartialType } from '@nestjs/mapped-types';
import { CreateTraefikDto } from './create-traefik.dto';

export class UpdateTraefikDto extends PartialType(CreateTraefikDto) {
  id: number;
}
