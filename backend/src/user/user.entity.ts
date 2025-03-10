import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;  // ✅ Nombre

  @Column()
  lastName: string;  // ✅ Apellidos

  @Column({ unique: true })
  email: string;  // ✅ Email único

  @Column()
  password: string;  // ✅ Contraseña

  @CreateDateColumn()
  createdAt: Date;  // ✅ Fecha de creación automática

  @UpdateDateColumn()
  updatedAt: Date;  // ✅ Fecha de última actualización automática
}
