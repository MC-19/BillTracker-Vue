import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Business } from './business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Sector } from '../sector/sector.entity';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
  ) {}

  async create(dto: CreateBusinessDto): Promise<Business> {
    const sectors = dto.sectorIds
      ? await this.sectorRepository.find({ where: { id: In(dto.sectorIds) } })
      : [];

    const business = this.businessRepository.create({
      ...dto,
      sectors,
    });

    return this.businessRepository.save(business);
  }

  async findAll(): Promise<Business[]> {
    return this.businessRepository.find({ relations: ['sectors'] });
  }

  async findOne(id: number): Promise<Business> {
    const business = await this.businessRepository.findOne({
      where: { id },
      relations: ['sectors'],
    });

    if (!business) {
      throw new NotFoundException('Negocio no encontrado');
    }

    return business;
  }

  async update(id: number, dto: UpdateBusinessDto): Promise<Business> {
    const business = await this.findOne(id);

    if (dto.sectorIds) {
      const sectors = await this.sectorRepository.find({ where: { id: In(dto.sectorIds) } });
      business.sectors = sectors;
    }

    Object.assign(business, dto);
    return this.businessRepository.save(business);
  }

  async remove(id: number): Promise<void> {
    const business = await this.findOne(id);
    await this.businessRepository.remove(business);
  }
}
