import { ApiProperty } from '@nestjs/swagger';

export class CreateListaDistribucionDto {
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
