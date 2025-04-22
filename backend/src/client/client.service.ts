import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PaymentMethod } from '../payment-method/payment-method.entity';
import { Business } from '../business/business.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,

    @InjectRepository(Business)
    private readonly businessRepo: Repository<Business>,

    @InjectRepository(PaymentMethod)
    private readonly paymentMethodRepo: Repository<PaymentMethod>,
  ) {}

  private relations = ['businesses', 'paymentMethods'];

  async create(dto: CreateClientDto): Promise<Client> {
    const { businessId, paymentMethodIds = [], ...data } = dto;
    const client = this.clientRepo.create(data);

    // Cargamos y validamos negocios
    if (businessId) {
      const biz = await this.businessRepo.findOneBy({ id: businessId });
      if (!biz) throw new BadRequestException('Empresa no existe');
      client.business = biz;
    }

    // Cargamos y validamos métodos de pago
    if (paymentMethodIds.length) {
      const methods = await this.paymentMethodRepo.find({ where: { id: In(paymentMethodIds) } });
      if (methods.length !== paymentMethodIds.length) {
        throw new BadRequestException('Algunos métodos de pago no existen');
      }
      client.paymentMethods = methods;
    }

    // Salvamos todo junto (TypeORM rellenará client_business)
    const saved = await this.clientRepo.save(client);
    return this.findOne(saved.id);
  }

  findAll(): Promise<Client[]> {
    return this.clientRepo.find({
      relations: this.relations,
      order: { nombreFiscal: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientRepo.findOne({
      where: { id },
      relations: this.relations,
    });
    if (!client) throw new NotFoundException(`Cliente ${id} no encontrado`);
    return client;
  }

  async update(id: number, dto: UpdateClientDto): Promise<Client> {
    const client = await this.findOne(id);
    const { businessId, paymentMethodIds, ...data } = dto;
  
    // 1) Campos escalares
    if (Object.keys(data).length) {
      await this.clientRepo.update(id, data);
    }
  
    // 2) Asignar businessId
    if (businessId !== undefined) {
      const biz = await this.businessRepo.findOneBy({ id: businessId });
      if (!biz) throw new BadRequestException('Empresa no existe');
      client.business = biz;
    }
  
    // 3) Relación N–N con PaymentMethod
    if (paymentMethodIds !== undefined) {
      if (paymentMethodIds.length) {
        const methods = await this.paymentMethodRepo.find({
          where: { id: In(paymentMethodIds), businessId: client.business.id }
        });
        if (methods.length !== paymentMethodIds.length) {
          throw new BadRequestException('Método de pago inválido');
        }
        client.paymentMethods = methods;
      } else {
        client.paymentMethods = [];
      }
    }
  
    await this.clientRepo.save(client);
    return this.findOne(id);
  }
}
