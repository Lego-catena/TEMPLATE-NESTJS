import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task_config' })
export class ListaDistribucion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre', unique: true })
  name: string;
}
