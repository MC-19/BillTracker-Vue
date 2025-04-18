// src/payment-method/payment-method.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import { Business } from '../business/business.entity';
import { Client } from '../client/client.entity';

@Entity({ name: 'payment_methods' })
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  slug: string;

  @Column({ type: 'varchar', length: 50 })
  label: string;

  /** Cada método puede aplicarse a muchas empresas */
  @ManyToMany(() => Business, (b) => b.paymentMethods)
  businesses: Business[];

  /** Cada método puede aplicarse a muchos clientes */
  @ManyToMany(() => Client, (c) => c.paymentMethods)
  clients: Client[];
}
