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
    const { businessIds = [], paymentMethodIds = [], ...data } = dto;

    // Creamos el cliente base
    const client = this.clientRepo.create(data);

    // Cargamos y validamos negocios
    if (businessIds.length) {
      const businesses = await this.businessRepo.find({ where: { id: In(businessIds) } });
      if (businesses.length !== businessIds.length) {
        throw new BadRequestException('Algunas empresas no existen');
      }
      client.businesses = businesses;
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
    // 1) Esto ya lanza si no existe, y devuelve un Client (nunca null)
    const client = await this.findOne(id);
  
    const { businessIds, paymentMethodIds, ...data } = dto;
  
    // 2) Actualizo campos escalares  
    if (Object.keys(data).length) {
      await this.clientRepo.update(id, data);
    }
  
    // 3) Cargo relaciones si vienen en el DTO
    if (businessIds) {
      if (businessIds.length) {
        const businesses = await this.businessRepo.find({ where: { id: In(businessIds) } });
        if (businesses.length !== businessIds.length) {
          throw new BadRequestException('Algunas empresas no existen');
        }
        client.businesses = businesses;
      } else {
        client.businesses = [];
      }
    }
  
    if (paymentMethodIds) {
      if (paymentMethodIds.length) {
        const methods = await this.paymentMethodRepo.find({ where: { id: In(paymentMethodIds) } });
        if (methods.length !== paymentMethodIds.length) {
          throw new BadRequestException('Algunos métodos de pago no existen');
        }
        client.paymentMethods = methods;
      } else {
        client.paymentMethods = [];
      }
    }
  
    // 4) Aquí TS sabe que `client` nunca es null
    await this.clientRepo.save(client);
    return this.findOne(id);
  }  
}
