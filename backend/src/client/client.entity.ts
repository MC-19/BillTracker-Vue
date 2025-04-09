// src/client/client.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
  } from 'typeorm';
  import { Business } from '../business/business.entity';
  import { PaymentMethod } from '../payment-method/payment-method.entity';
  import { TipoContacto } from '../client/enum/tipo-contacto.enum';

  @Entity({ name: 'clients' })
  export class Client {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 100 })
    nombreFiscal: string;
  
    @Column({ type: 'varchar', length: 50 })
    nDocumento: string;
  
    @Column({ type: 'enum', enum: TipoContacto })
    tipoContacto: TipoContacto;
  
    @Column({ type: 'varchar', length: 100 })
    email: string;
  
    @Column({ type: 'varchar', length: 30 })
    telefono: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    emailAdicional?: string;
  
    @Column({ type: 'varchar', length: 150 })
    direccionFiscal: string;
  
    @Column({ type: 'varchar', length: 10 })
    codigoPostal: string;
  
    @Column({ type: 'varchar', length: 100 })
    ciudad: string;
  
    @Column({ type: 'varchar', length: 100 })
    provincia: string;
  
    @Column({ type: 'varchar', length: 100 })
    pais: string;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    impuesto?: number;
  
    @Column({ default: false })
    recargoEquivalencia: boolean;
  
    @Column({ type: 'text', nullable: true })
    informacionAdicional?: string;
  
    @ManyToMany(() => Business, (business) => business.clients)
    @JoinTable({ name: 'client_business' })
    businesses: Business[];
  
    @ManyToOne(() => PaymentMethod, (method) => method.clients, { nullable: true })
    paymentMethod: PaymentMethod | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
  }