import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Business } from '../business/business.entity';
import { Category } from '../category/category.entity';

@Entity({ name: 'sectors' })
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  slug: string;

  @Column({ type: 'text' })
  label: string;

  @ManyToMany(() => Business, (business) => business.sectors)
  businesses: Business[];

  @OneToMany(() => Category, (category) => category.sector)
  categories: Category[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
