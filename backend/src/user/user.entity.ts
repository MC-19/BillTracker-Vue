import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { UserBusiness } from '../user-business/user-business.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'text' })
  password: string;

  @Column({ nullable: true, type: 'text' })
  firstName: string | null;

  @Column({ nullable: true, type: 'text' })
  lastName1: string | null;

  @Column({ nullable: true, type: 'text' })
  lastName2: string | null;

  @Column({ default: true }) // ✅ Nuevo campo para desactivar usuarios en vez de eliminarlos
  active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => UserBusiness, (userBusiness) => userBusiness.user)
  userBusinesses: UserBusiness[];
}
