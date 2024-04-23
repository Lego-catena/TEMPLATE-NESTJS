import { Test, TestingModule } from '@nestjs/testing';
import { ListaDistribucionService } from './lista-distribucion.service';

describe('ListaDistribucionService', () => {
  let service: ListaDistribucionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaDistribucionService],
    }).compile();

    service = module.get<ListaDistribucionService>(ListaDistribucionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
