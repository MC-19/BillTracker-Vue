import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Sector } from '../sector/sector.entity';
import { UserBusiness } from '../user-business/user-business.entity';

@Entity({ name: 'businesses' })
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  nombreFiscal: string;

  @Column({ type: 'text', unique: true, nullable: false })
  nifCif: string;

  @Column({ type: 'text', nullable: false })
  telefono: string;

  @Column({ type: 'text', nullable: false })
  direccionFacturacion: string;

  @Column({ type: 'text', nullable: false })
  ciudad: string;

  @Column({ type: 'text', nullable: false })
  codigoPostal: string;

  @Column({ type: 'text', nullable: false })
  provincia: string;

  @Column({ type: 'text', nullable: false })
  pais: string;

  // ✅ Relación ManyToMany con Sector
  @ManyToMany(() => Sector, (sector) => sector.businesses)
  @JoinTable({ name: 'business_sector' }) // Crea la tabla intermedia
  sectors: Sector[];

  @OneToMany(() => UserBusiness, (userBusiness) => userBusiness.business)
  userBusinesses: UserBusiness[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}