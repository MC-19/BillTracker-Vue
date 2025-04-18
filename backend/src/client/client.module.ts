import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Business } from '../business/business.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Business, PaymentMethod])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService, TypeOrmModule],
})
export class ClientModule {}
