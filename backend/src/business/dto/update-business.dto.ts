import { IsOptional, IsString, IsArray, IsInt } from 'class-validator';

export class UpdateBusinessDto {
  @IsOptional()
  @IsString()
  nombreFiscal?: string;

  @IsOptional()
  @IsString()
  nifCif?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  direccionFacturacion?: string;

  @IsOptional()
  @IsString()
  ciudad?: string;

  @IsOptional()
  @IsString()
  codigoPostal?: string;

  @IsOptional()
  @IsString()
  provincia?: string;

  @IsOptional()
  @IsString()
  pais?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  sectorIds?: number[];

  @IsOptional()
  @IsInt()
  paymentMethodId?: number; // ✅ nuevo campo
}
