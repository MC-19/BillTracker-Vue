// src/series/serie-factura.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Business } from '../business/business.entity';
  // (más adelante añadirás relación con Invoice)
  
  @Entity({ name: 'serie_factura' })
  export class SerieFactura {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 20 })
    codigo: string; // Ej: A2024, B1, etc.
  
    @Column({ type: 'int', default: 1 })
    contador: number; // número actual para incrementar
  
    @ManyToOne(() => Business, (b) => b.series, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'business_id' })
    business: Business;
  
    @Column()
    business_id: number;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
  }
  