import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',  // ⚠️ Asegúrate de que la DB está corriendo
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASS || 'admin123',
      database: process.env.DB_NAME || 'tienda_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ SOLO para desarrollo
    }),
    UserModule,  // ✅ Importar UserModule
  ],
})
export class AppModule {}
