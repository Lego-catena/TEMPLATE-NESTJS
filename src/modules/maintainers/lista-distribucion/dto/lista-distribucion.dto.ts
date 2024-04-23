import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO (Data Transfer Object) que representa una lista de distribución.
 */
export class ListaDistribucionDto {
  @ApiProperty({
    name: 'id',
    type: 'number',
  })
  id: number;

  @ApiProperty({
    name: 'name',
    type: 'string',
    required: true,
  })
  name: string;
}
