// src/payment-method/payment-method.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn,
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

  /** FK al negocio propietario */
  @Column({ nullable: true }) // <--- esto es lo que te falta
  businessId: number;

  @ManyToMany(() => Business, (b) => b.paymentMethods)
  businesses: Business[];

  /** Cada método puede aplicarse a muchos clientes */
  @ManyToMany(() => Client, (c) => c.paymentMethods)
  clients: Client[];
}
