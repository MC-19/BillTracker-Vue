import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Sector } from '../sector/sector.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Sector]), // 👈 Agregado Sector
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
