import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SerieFactura } from './serie-factura.entity';
import { CreateSerieFacturaDto } from './dto/create-serie-factura.dto';
import { UpdateSerieFacturaDto } from './dto/update-serie-factura.dto';
import { Business } from '../business/business.entity';

@Injectable()
export class SerieFacturaService {
  constructor(
    @InjectRepository(SerieFactura)
    private readonly serieRepo: Repository<SerieFactura>,
    @InjectRepository(Business)
    private readonly businessRepo: Repository<Business>,
  ) {}

  async create(businessId: number, dto: CreateSerieFacturaDto): Promise<SerieFactura> {
    const business = await this.businessRepo.findOneBy({ id: businessId });
    if (!business) throw new NotFoundException('Empresa no encontrada');

    const serie = this.serieRepo.create({ ...dto, contador: 1, business });
    return this.serieRepo.save(serie);
  }

  findAll(): Promise<SerieFactura[]> {
    return this.serieRepo.find({ relations: ['business'] });
  }

  findByBusiness(businessId: number): Promise<SerieFactura[]> {
    return this.serieRepo.find({ where: { business: { id: businessId } } });
  }

  async update(id: number, dto: UpdateSerieFacturaDto): Promise<SerieFactura> {
    const serie = await this.serieRepo.findOneBy({ id });
    if (!serie) throw new NotFoundException('Serie no encontrada');

    Object.assign(serie, dto);
    return this.serieRepo.save(serie);
  }

  async remove(id: number): Promise<void> {
    const serie = await this.serieRepo.findOneBy({ id });
    if (!serie) throw new NotFoundException('Serie no encontrada');
    await this.serieRepo.remove(serie);
  }
}
