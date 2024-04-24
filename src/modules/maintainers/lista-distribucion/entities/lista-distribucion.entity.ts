import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'lista_distribucion' })
export class ListaDistribucion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre', unique: true })
  name: string;
}
