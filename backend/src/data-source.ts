import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

// Entidades
import { Sector } from './sector/sector.entity';
import { Category } from './category/category.entity';
import { Business } from './business/business.entity';
import { User } from './user/user.entity';
import { UserBusiness } from './user-business/user-business.entity'; // 👈 nueva

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Sector, Category, Business, User, UserBusiness],
});
