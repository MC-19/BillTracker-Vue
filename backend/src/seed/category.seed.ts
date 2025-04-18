import { DataSource } from 'typeorm';
import { Category } from '../category/category.entity';
import { Sector } from '../sector/sector.entity';
import categories from '../seed/data/categories.json';

export async function seedCategories(dataSource: DataSource) {
    const categoryRepo = dataSource.getRepository(Category);
    const sectorRepo = dataSource.getRepository(Sector);
  
    for (const { sectorSlug, category } of categories) {
      const sector = await sectorRepo.findOneBy({ slug: sectorSlug });
      if (!sector) {
        console.warn(`⚠️ Sector no encontrado para slug: ${sectorSlug}`);
        continue;
      }
  
      const exists = await categoryRepo.findOne({
        where: {
          name: category,
          sector: { id: sector.id },
        },
        relations: ['sector'],
      });
  
      if (!exists) {
        const newCategory = categoryRepo.create({ name: category, sector });
        await categoryRepo.save(newCategory);
        console.log(`✅ Insertada: ${category} (${sectorSlug})`);
      } else {
        console.log(`⏭️ Ya existe: ${category} (${sectorSlug})`);
      }
    }
  
    console.log('🎉 Seed de categorías finalizado');
  }
  
