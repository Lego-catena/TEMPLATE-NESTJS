import { Injectable, Logger } from '@nestjs/common';
import { CreateListaDistribucionDto } from './dto/create-lista-distribucion.dto';
import { UpdateListaDistribucionDto } from './dto/update-lista-distribucion.dto';
import { ListaDistribucion } from '@src/modules/maintainers/lista-distribucion/entities/lista-distribucion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListaDistribucionService {

  private readonly logger: Logger = new Logger(ListaDistribucionService.name);

  constructor(
    @InjectRepository(ListaDistribucion)
    private listaDistribucionRepository: Repository<ListaDistribucion>,
  ) {}

  async create(model: CreateListaDistribucionDto): Promise<ListaDistribucion> {
    return await this.listaDistribucionRepository.save(model);
  }

  async findAll(): Promise<ListaDistribucion[]> {
    return await this.listaDistribucionRepository.find();
  }

  async findOne(id: number): Promise<ListaDistribucion> {
    return await this.listaDistribucionRepository.findOneBy({ id: id });
  }

  async update(id: number, model: UpdateListaDistribucionDto): Promise<any> {
    return await this.listaDistribucionRepository.update({ id: id }, model);
  }

  async remove(id: number) {
    const distribucion: ListaDistribucion = await this.listaDistribucionRepository.preload({ id: id });
    this.logger.log(
      await this.listaDistribucionRepository.remove(distribucion),
    );
  }
}
