import { Test, TestingModule } from '@nestjs/testing';
import { ListaDistribucionController } from './lista-distribucion.controller';
import { ListaDistribucionService } from './lista-distribucion.service';

describe('ListaDistribucionController', () => {
  let controller: ListaDistribucionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaDistribucionController],
      providers: [ListaDistribucionService],
    }).compile();

    controller = module.get<ListaDistribucionController>(ListaDistribucionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
