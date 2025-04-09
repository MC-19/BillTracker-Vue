// src/client/client.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Business } from '../business/business.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';

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

  async create(dto: CreateClientDto): Promise<Client> {
    const businesses = dto.businessIds
      ? await this.businessRepo.find({ where: { id: In(dto.businessIds) } })
      : [];

    const paymentMethod = dto.paymentMethodId
      ? await this.paymentMethodRepo.findOne({ where: { id: dto.paymentMethodId } })
      : null;

    const client = this.clientRepo.create({
      ...dto,
      businesses,
      paymentMethod,
    });

    return this.clientRepo.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientRepo.find({
      relations: ['businesses', 'paymentMethod'],
      order: { nombreFiscal: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientRepo.findOne({
      where: { id },
      relations: ['businesses', 'paymentMethod'],
    });
    if (!client) throw new NotFoundException('Cliente no encontrado');
    return client;
  }

  async update(id: number, dto: UpdateClientDto): Promise<Client> {
    const client = await this.findOne(id);

    if (dto.businessIds) {
      const businesses = await this.businessRepo.find({ where: { id: In(dto.businessIds) } });
      client.businesses = businesses;
    }

    if (dto.paymentMethodId) {
      const method = await this.paymentMethodRepo.findOne({ where: { id: dto.paymentMethodId } });
      client.paymentMethod = method;
    }

    Object.assign(client, dto);
    return this.clientRepo.save(client);
  }

  async remove(id: number): Promise<void> {
    const client = await this.findOne(id);
    await this.clientRepo.remove(client);
  }
}
