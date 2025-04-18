import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Sector } from '../sector/sector.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @InjectRepository(Sector)
    private readonly sectorRepo: Repository<Sector>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const sector = await this.sectorRepo.findOneBy({ id: dto.sectorId });
    if (!sector) throw new NotFoundException('Sector no encontrado');

    const category = this.categoryRepo.create({ name: dto.name, sector });
    return this.categoryRepo.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepo.find({ relations: ['sector'] });
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepo.findOne({
      where: { id },
      relations: ['sector'],
    });
    if (!category) throw new NotFoundException('Categoría no encontrada');
    return category;
  }

  async update(id: number, dto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findOne(id);

    if (dto.sectorId) {
      const newSector = await this.sectorRepo.findOneBy({ id: dto.sectorId });
      if (!newSector) throw new NotFoundException('Sector no encontrado');
      category.sector = newSector;
    }

    Object.assign(category, dto);
    return this.categoryRepo.save(category);
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await this.categoryRepo.remove(category);
  }
}
