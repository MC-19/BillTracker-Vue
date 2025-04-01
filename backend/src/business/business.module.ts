import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { Sector } from '../sector/sector.entity'; // ✅ Importamos Sector

@Module({
  imports: [TypeOrmModule.forFeature([Business, Sector])], // ✅ Incluimos Sector
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessService, TypeOrmModule],
})
export class BusinessModule {}
