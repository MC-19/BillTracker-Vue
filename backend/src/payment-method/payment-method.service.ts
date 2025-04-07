// src/payment-method/payment-method.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './payment-method.entity';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly paymentMethodRepo: Repository<PaymentMethod>,
  ) {}

  findAll(): Promise<PaymentMethod[]> {
    return this.paymentMethodRepo.find({ order: { label: 'ASC' } });
  }

  async findOne(id: number): Promise<PaymentMethod> {
    const method = await this.paymentMethodRepo.findOne({ where: { id } });
    if (!method) throw new NotFoundException('Método de pago no encontrado');
    return method;
  }

  async create(dto: CreatePaymentMethodDto): Promise<PaymentMethod> {
    const method = this.paymentMethodRepo.create(dto);
    return this.paymentMethodRepo.save(method);
  }

  async update(id: number, dto: UpdatePaymentMethodDto): Promise<PaymentMethod> {
    const method = await this.findOne(id);
    Object.assign(method, dto);
    return this.paymentMethodRepo.save(method);
  }

  async remove(id: number): Promise<void> {
    const method = await this.findOne(id);
    await this.paymentMethodRepo.remove(method);
  }
}
