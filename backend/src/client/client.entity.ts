import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Business } from '../business/business.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';
import { TipoContacto } from './enum/tipo-contacto.enum';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombreFiscal: string;

  @Column({ length: 50 })
  nDocumento: string;

  @Column({ type: 'enum', enum: TipoContacto })
  tipoContacto: TipoContacto;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 30 })
  telefono: string;

  @Column({ length: 100, nullable: true })
  emailAdicional?: string;

  @Column({ length: 150 })
  direccionFiscal: string;

  @Column({ length: 10 })
  codigoPostal: string;

  @Column({ length: 100 })
  ciudad: string;

  @Column({ length: 100 })
  provincia: string;

  @Column({ length: 100 })
  pais: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  impuesto?: number;

  @Column({ default: false })
  recargoEquivalencia: boolean;

  @Column({ type: 'text', nullable: true })
  informacionAdicional?: string;

  /** FK al negocio propietario */
  @Column() businessId: number;

  @ManyToOne(() => Business, b => b.clients, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'businessId' })
  business: Business;

  /** Método de pago */
  @ManyToMany(() => PaymentMethod, (pm) => pm.clients)
  @JoinTable({
    name: 'client_payment_method',
    joinColumn: { name: 'client_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'payment_method_id', referencedColumnName: 'id' },
  })
  paymentMethods: PaymentMethod[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
