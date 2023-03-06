import { Test, TestingModule } from '@nestjs/testing';
import { TraefikService } from './traefik.service';

describe('TraefikService', () => {
  let service: TraefikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraefikService],
    }).compile();

    service = module.get<TraefikService>(TraefikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
