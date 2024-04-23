import { Module } from '@nestjs/common';
import { ListaDistribucionModule } from './lista-distribucion/lista-distribucion.module';

@Module({
  imports: [ListaDistribucionModule],
  controllers: [],
  providers: [],
})
export class MaintainersModule {}
