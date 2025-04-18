import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from './sector.entity';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sector])],
  controllers: [SectorController],
  providers: [SectorService],
  exports: [SectorService, TypeOrmModule],
})
export class SectorModule {}
