import { Entity, ManyToOne, PrimaryColumn, Column, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Business } from '../business/business.entity';

@Entity({ name: 'user_business' })
export class UserBusiness {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  business_id: number;

  @ManyToOne(() => User, (user) => user.userBusinesses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' }) // 🔹 Define la FK como `user_id`
  user: User;

  @ManyToOne(() => Business, (business) => business.userBusinesses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'business_id' }) // 🔹 Define la FK como `business_id`
  business: Business;

  @Column({ type: 'varchar', length: 20 })
  role: 'admin' | 'editor' | 'viewer';
}
