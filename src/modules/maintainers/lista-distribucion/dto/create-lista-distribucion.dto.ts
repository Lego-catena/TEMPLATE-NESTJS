import { OmitType, PartialType } from '@nestjs/swagger';
import { ListaDistribucionDto } from '@src/modules/maintainers/lista-distribucion/dto/lista-distribucion.dto';

export class CreateListaDistribucionDto extends PartialType(
  OmitType(ListaDistribucionDto, ['id'] as const),
) {}
