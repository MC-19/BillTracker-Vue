import { DataSource } from 'typeorm';
import { Sector } from '../sector/sector.entity';
import sectors from '../seed/data/sectors.json';

export async function seedSectors(dataSource: DataSource) {
  const repo = dataSource.getRepository(Sector);
  const count = await repo.count();
  if (count > 0) {
    console.log('✅ Sectores ya insertados');
    return;
  }

  const toInsert = sectors.map(({ slug, label }) => repo.create({ slug, label }));
  await repo.save(toInsert);
  console.log('🚀 Sectores insertados correctamente');
}
