import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { ListaDistribucionService } from '../services/lista-distribucion.service';
import { CreateListaDistribucionDto } from '../dto/create-lista-distribucion.dto';
import { UpdateListaDistribucionDto } from '../dto/update-lista-distribucion.dto';
import { ListaDistribucion } from '@src/modules/maintainers/lista-distribucion/entities/lista-distribucion.entity';
import { ListaDistribucionDto } from '@src/modules/maintainers/lista-distribucion/dto/lista-distribucion.dto';

/**
 * Controlador para la gestión de las operaciones relacionadas con las listas de distribución.
 */
@Controller('lista-distribucion')
export class ListaDistribucionController {
  private readonly logger: Logger = new Logger(
    ListaDistribucionController.name,
  );

  constructor(
    private readonly listaDistribucionService: ListaDistribucionService,
  ) {}

  /**
   * Crea una nueva lista de distribución.
   * @param createListaDistribucionDto Objeto DTO para crear la lista de distribución.
   * @returns Una promesa que se resuelve con la nueva lista de distribución creada.
   */
  @Post()
  async create(
    @Body() createListaDistribucionDto: CreateListaDistribucionDto,
  ): Promise<ListaDistribucion | undefined> {
    try {
      return this.listaDistribucionService.create(createListaDistribucionDto);
    } catch (err) {
      this.logger.error(err);
    }
  }

  /**
   * Obtiene todas las listas de distribución existentes.
   * @returns Una lista de todas las listas de distribución.
   */
  @Get()
  findAll(): Promise<ListaDistribucion[]> {
    return this.listaDistribucionService.findAll();
  }

  /**
   * Encuentra una lista de distribución por su ID.
   * @param id El ID de la lista de distribución a buscar.
   * @returns La lista de distribución encontrada.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ListaDistribucionDto> {
    return this.listaDistribucionService.findOne(+id);
  }

  /**
   * Actualiza una lista de distribución existente.
   * @param id El ID de la lista de distribución a actualizar.
   * @param updateListaDistribucionDto Objeto DTO con los datos actualizados de la lista de distribución.
   * @returns La lista de distribución actualizada.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListaDistribucionDto: UpdateListaDistribucionDto,
  ): Promise<ListaDistribucion> {
    return this.listaDistribucionService.update(
      +id,
      updateListaDistribucionDto,
    );
  }

  /**
   * Elimina una lista de distribución por su ID.
   * @param id El ID de la lista de distribución a eliminar.
   * @returns Una cadena indicando el resultado de la eliminación.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<ListaDistribucion> {
    return this.listaDistribucionService.remove(+id);
  }
}
