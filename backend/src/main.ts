import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seedSectors } from './sector/sector.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Configurar CORS
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
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // ✅ Ejecutar la semilla de sectores predefinidos
  const dataSource = app.get(DataSource);
  await seedSectors(dataSource);

  await app.listen(3000);
  console.log(`✅ Backend corriendo en http://localhost:3000`);
}
bootstrap();
