import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '@src/modules/mail/mail.module';
import { MaintainersModule } from './modules/maintainers/maintainers.module';
import { ListaDistribucion } from '@src/modules/maintainers/lista-distribucion/entities/lista-distribucion.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [ListaDistribucion],
      synchronize: true,
    }),
    MailModule,
    MaintainersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
