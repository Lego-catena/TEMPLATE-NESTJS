import { PartialType } from '@nestjs/swagger';
import { CreateListaDistribucionDto } from './create-lista-distribucion.dto';

export class UpdateListaDistribucionDto extends PartialType(CreateListaDistribucionDto) {}
