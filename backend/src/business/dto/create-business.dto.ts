import { IsNotEmpty, IsOptional, IsString, IsArray, ArrayNotEmpty, IsInt } from 'class-validator';

export class CreateBusinessDto {
  @IsNotEmpty()
  @IsString()
  nombreFiscal: string;

  @IsNotEmpty()
  @IsString()
  nifCif: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  direccionFacturacion: string;

  @IsNotEmpty()
  @IsString()
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  codigoPostal: string;

  @IsNotEmpty()
  @IsString()
  provincia: string;

  @IsNotEmpty()
  @IsString()
  pais: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  sectorIds?: number[];
}
