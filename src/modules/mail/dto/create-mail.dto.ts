import { ApiProperty } from '@nestjs/swagger';

export class CreateMailDto {
  @ApiProperty({
    required: true,
    description: 'Indica el nombre del destinatario',
    type: String
  })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Indica el email del destinatario',
    type: String
  })
  email: string;
}
