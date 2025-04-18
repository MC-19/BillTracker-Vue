import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { Sector } from '../sector/sector.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity'; // ✅ Importa esto

@Module({
  imports: [TypeOrmModule.forFeature([Business, Sector, PaymentMethod])], // ✅ Añadido PaymentMethod
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessService, TypeOrmModule],
})
export class BusinessModule {}
