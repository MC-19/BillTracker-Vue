import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seedSectors } from './seed/sector.seed';
import { seedCategories } from './seed/category.seed';
import { seedPaymentMethods } from './seed/payment-method.seed';
import './config/env';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // CORS
  const allowedOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(',')
    : ['http://localhost:5173', 'http://localhost:5174'];

  app.enableCors({
    origin: (origin, callback) => {
      callback(null, !origin || allowedOrigins.includes(origin));
    },
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
  });

  // Obtenemos el DataSource ya inicializado
  const dataSource = app.get(DataSource);

  if (process.env.NODE_ENV === 'development') {
    try {
      // Comprobamos y ejecutamos seeds en paralelo
      const sectorRepo = dataSource.getRepository('sector');
      const categoryRepo = dataSource.getRepository('category');
      const paymentRepo = dataSource.getRepository('payment_methods');

      const [sectorCount, categoryCount, paymentCount] = await Promise.all([
        sectorRepo.count(),
        categoryRepo.count(),
        paymentRepo.count(),
      ]);

      const seeds: Promise<void>[] = [];

      if (sectorCount === 0) {
        logger.log('🌱 Insertando sectores...');
        seeds.push(seedSectors(dataSource));
      } else {
        logger.log('✅ Sectores ya insertados');
      }

      if (categoryCount === 0) {
        logger.log('🌱 Insertando categorías...');
        seeds.push(seedCategories(dataSource));
      } else {
        logger.log('✅ Categorías ya insertadas');
      }

      if (paymentCount === 0) {
        logger.log('🌱 Insertando métodos de pago...');
        seeds.push(seedPaymentMethods(dataSource));
      } else {
        logger.log('✅ Métodos de pago ya insertados');
      }

      // Ejecutamos todos los seeds configurados
      await Promise.all(seeds);
      logger.log('🎉 Seeds completados');
    } catch (err) {
      logger.error('Error al ejecutar seeds', err);
    }
  }

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  logger.log(`✅ Backend corriendo en http://localhost:${port}`);
}

bootstrap();
