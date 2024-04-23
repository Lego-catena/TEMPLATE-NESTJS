import { OmitType, PartialType } from '@nestjs/swagger';
import { ListaDistribucionDto } from '@src/modules/maintainers/lista-distribucion/dto/lista-distribucion.dto';

/**
 * DTO (Data Transfer Object) utilizado para actualizar una lista de distribución.
 * Este DTO es una versión parcial de ListaDistribucionDto, excluyendo el campo 'id'.
 */
export class UpdateListaDistribucionDto extends PartialType(
  OmitType(ListaDistribucionDto, ['id'] as const),
) {}
