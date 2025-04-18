import * as dotenv from 'dotenv';
import { existsSync } from 'fs';

const envFile = process.env.NODE_ENV === 'production'
  ? '.env.production'
  : '.env.development';

if (existsSync(envFile)) {
  dotenv.config({ path: envFile });
  console.log(`✅ Cargando variables desde ${envFile}`);
} else {
  console.warn(`⚠️ No se encontró el archivo ${envFile}`);
}
