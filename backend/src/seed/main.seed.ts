import { AppDataSource } from '../data-source';
import { seedSectors } from '../sector/sector.seed';
import { seedCategories } from '../category/category.seed';

AppDataSource.initialize().then(async (dataSource) => {
  await seedSectors(dataSource);
  await seedCategories(dataSource); // 👈 esta línea es clave

  console.log('🎉 Seeding finalizado');
  process.exit(0);
});
