// src/sector/sector.seed.ts
import { DataSource } from 'typeorm';
import { Sector } from './sector.entity';

const predefinedSectors = [
  'Formación',
  'Hostelería',
  'Inmobiliario',
  'Reformas, reparaciones e instalaciones',
  'Salud y Bienestar',
  'Actividades lúdicas y Viajes',
  'Agricultura/Ganadería',
  'Asociaciones',
  'Comercio',
  'Servicios artísticos & Márketing',
  'Servicios Profesionales',
  'Servicios tecnológicos -IT',
  'Transporte',
];

export async function seedSectors(dataSource: DataSource) {
  const repo = dataSource.getRepository(Sector);

  const existingCount = await repo.count();
  if (existingCount > 0) {
    console.log('✅ Los sectores ya están insertados.');
    return;
  }

  const sectorEntities = predefinedSectors.map((nombre) => repo.create({ nombre }));
  await repo.save(sectorEntities);
  console.log('🚀 Sectores predefinidos insertados correctamente.');
}
