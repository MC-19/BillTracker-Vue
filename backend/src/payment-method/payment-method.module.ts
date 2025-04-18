// src/payment-method/payment-method.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './payment-method.entity';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodController } from './payment-method.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
  exports: [TypeOrmModule, PaymentMethodService],
})
export class PaymentMethodModule {}
