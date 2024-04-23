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
import { ListaDistribucionService } from './lista-distribucion.service';
import { CreateListaDistribucionDto } from './dto/create-lista-distribucion.dto';
import { UpdateListaDistribucionDto } from './dto/update-lista-distribucion.dto';
import { ListaDistribucion } from '@src/modules/maintainers/lista-distribucion/entities/lista-distribucion.entity';

@Controller('lista-distribucion')
export class ListaDistribucionController {
  private readonly logger: Logger = new Logger(
    ListaDistribucionController.name,
  );

  constructor(
    private readonly listaDistribucionService: ListaDistribucionService,
  ) {}

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

  @Get()
  findAll() {
    return this.listaDistribucionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaDistribucionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListaDistribucionDto: UpdateListaDistribucionDto,
  ) {
    return this.listaDistribucionService.update(
      +id,
      updateListaDistribucionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaDistribucionService.remove(+id);
  }
}
