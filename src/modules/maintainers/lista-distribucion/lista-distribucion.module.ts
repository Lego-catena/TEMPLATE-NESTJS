import { Module } from '@nestjs/common';
import { ListaDistribucionService } from './services/lista-distribucion.service';
import { ListaDistribucionController } from './controllers/lista-distribucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaDistribucion } from '@src/modules/maintainers/lista-distribucion/entities/lista-distribucion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListaDistribucion])],
  controllers: [ListaDistribucionController],
  providers: [ListaDistribucionService],
})
export class ListaDistribucionModule {}
