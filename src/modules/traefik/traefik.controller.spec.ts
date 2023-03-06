import { Test, TestingModule } from '@nestjs/testing';
import { TraefikController } from './traefik.controller';
import { TraefikService } from './traefik.service';

describe('TraefikController', () => {
  let controller: TraefikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraefikController],
      providers: [TraefikService],
    }).compile();

    controller = module.get<TraefikController>(TraefikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
