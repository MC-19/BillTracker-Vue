// src/payment-method/payment-method.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Business } from '../business/business.entity';

@Entity({ name: 'payment_methods' })
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  slug: string;

  @Column({ type: 'varchar', length: 50 })
  label: string;

  @OneToMany(() => Business, (business) => business.paymentMethod)
  businesses: Business[];
}

