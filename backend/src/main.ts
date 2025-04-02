import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seedSectors } from './seed/sector.seed';
import { seedCategories } from './seed/category.seed';
import './config/env'; // si usás carga dinámica de .env (opcional)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(',')
    : ['http://localhost:5173', 'http://localhost:5174'];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const dataSource = app.get(DataSource);

  // ✅ Solo ejecutar seeds en entorno local y si la base está vacía
  if (process.env.NODE_ENV === 'development') {
    const sectorCount = await dataSource.getRepository('sector').count();
    const categoryCount = await dataSource.getRepository('category').count();

    if (sectorCount === 0) {
      console.log('🌱 Insertando sectores...');
      await seedSectors(dataSource);
    } else {
      console.log('✅ Sectores ya insertados');
    }

    if (categoryCount === 0) {
      console.log('🌱 Insertando categorías...');
      await seedCategories(dataSource);
    } else {
      console.log('✅ Categorías ya insertadas');
    }
  }

  await app.listen(3000);
  console.log(`✅ Backend corriendo en http://localhost:3000`);
}
bootstrap();
