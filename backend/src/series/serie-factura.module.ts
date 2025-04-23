import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerieFactura } from './serie-factura.entity';
import { SerieFacturaService } from './serie-factura.service';
import { SerieFacturaController } from './serie-factura.controller';
import { Business } from '../business/business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SerieFactura, Business])],
  providers: [SerieFacturaService],
  controllers: [SerieFacturaController],
  exports: [SerieFacturaService],
})
export class SerieFacturaModule {}
