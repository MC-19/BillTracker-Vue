import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sector } from './sector.entity';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
  ) {}

  async create(dto: CreateSectorDto): Promise<Sector> {
    const sector = this.sectorRepository.create(dto);
    return this.sectorRepository.save(sector);
  }

  async findAll(): Promise<Sector[]> {
    return this.sectorRepository.find({ relations: ['businesses'] });
  }

  async findOne(id: number): Promise<Sector> {
    const sector = await this.sectorRepository.findOne({ where: { id }, relations: ['businesses'] });
    if (!sector) {
      throw new NotFoundException('Sector no encontrado');
    }
    return sector;
  }

  async update(id: number, dto: UpdateSectorDto): Promise<Sector> {
    const sector = await this.findOne(id);
    Object.assign(sector, dto);
    return this.sectorRepository.save(sector);
  }

  async remove(id: number): Promise<void> {
    const sector = await this.findOne(id);
    await this.sectorRepository.remove(sector);
  }
}
