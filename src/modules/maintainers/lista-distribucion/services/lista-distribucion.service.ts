import { Injectable, Logger } from '@nestjs/common';
import { CreateListaDistribucionDto } from '../dto/create-lista-distribucion.dto';
import { UpdateListaDistribucionDto } from '../dto/update-lista-distribucion.dto';
import { ListaDistribucion } from '@src/modules/maintainers/lista-distribucion/entities/lista-distribucion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Servicio encargado de gestionar las operaciones relacionadas con las listas de distribución.
 *
 * @author jprodriguez
 */

@Injectable()
export class ListaDistribucionService {
  private readonly logger: Logger = new Logger(ListaDistribucionService.name);

  constructor(
    @InjectRepository(ListaDistribucion)
    private listaDistribucionRepository: Repository<ListaDistribucion>,
  ) {}

  /**
   * Crea una nueva lista de distribución.
   * @param model Objeto DTO para crear la lista de distribución.
   * @returns Una promesa que se resuelve con la nueva lista de distribución creada.
   */
  async create(model: CreateListaDistribucionDto): Promise<ListaDistribucion> {
    return await this.listaDistribucionRepository.save(model);
  }

  /**
   * Obtiene todas las listas de distribución existentes.
   * @returns Una promesa que se resuelve con una lista de todas las listas de distribución.
   */
  async findAll(): Promise<ListaDistribucion[]> {
    return await this.listaDistribucionRepository.find();
  }

  /**
   * Encuentra una lista de distribución por su ID.
   * @param id El ID de la lista de distribución a buscar.
   * @returns Una promesa que se resuelve con la lista de distribución encontrada.
   */
  async findOne(id: number): Promise<ListaDistribucion> {
    return await this.listaDistribucionRepository.findOneBy({ id: id });
  }

  /**
   * Actualiza una lista de distribución existente.
   * @param id El ID de la lista de distribución a actualizar.
   * @param model Objeto DTO con los datos actualizados de la lista de distribución.
   * @returns Una promesa que se resuelve con el resultado de la actualización.
   */
  async update(id: number, model: UpdateListaDistribucionDto): Promise<any> {
    return await this.listaDistribucionRepository.update({ id: id }, model);
  }

  /**
   * Elimina una lista de distribución por su ID.
   * @param id El ID de la lista de distribución a eliminar.
   * @returns Una promesa que se resuelve con el resultado de la eliminación.
   */
  async remove(id: number): Promise<ListaDistribucion> {
    const distribucion: ListaDistribucion = await this.listaDistribucionRepository.preload({ id: id });
    return await this.listaDistribucionRepository.remove(distribucion);
  }
}
