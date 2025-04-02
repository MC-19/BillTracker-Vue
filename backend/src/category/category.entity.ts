import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Sector } from '../sector/sector.entity';

@Entity({name:'category'})
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @ManyToOne(() => Sector, (sector) => sector.categories, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    sector: Sector;      

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}