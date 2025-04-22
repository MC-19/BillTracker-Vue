import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Sector } from '../sector/sector.entity';
import { UserBusiness } from '../user-business/user-business.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';
import { Client } from 'src/client/client.entity';

@Entity({ name: 'businesses' })
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombreFiscal: string;

  @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
  nifCif: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  telefono: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  direccionFacturacion: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ciudad: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  codigoPostal: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  provincia: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  pais: string;

  /** Relación N–N con Sector */
  @ManyToMany(() => Sector, (sector) => sector.businesses)
  @JoinTable({
    name: 'business_sector',
    joinColumn: { name: 'business_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'sector_id', referencedColumnName: 'id' },
  })
  sectors: Sector[];

  /** Relaciones con la tabla puente user_business */
  @OneToMany(() => UserBusiness, (ub) => ub.business)
  userBusinesses: UserBusiness[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => PaymentMethod, (pm) => pm.businesses)
  @JoinTable({
    name: 'business_payment_method',
    joinColumn: { name: 'business_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'payment_method_id', referencedColumnName: 'id' },
  })
  paymentMethods: PaymentMethod[];

  /** 1–N con Client */
  @OneToMany(() => Client, c => c.business, {
    cascade: ['insert','update'],
    eager: true,
  })
  clients: Client[];

}
