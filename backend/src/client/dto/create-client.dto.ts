import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  IsInt,
} from 'class-validator';
import { TipoContacto } from '../enum/tipo-contacto.enum';

export class CreateClientDto {
  @IsString()
  nombreFiscal: string;

  @IsString()
  nDocumento: string;

  @IsEnum(TipoContacto)
  tipoContacto: TipoContacto;

  @IsEmail()
  email: string;

  @IsString()
  telefono: string;

  @IsOptional()
  @IsEmail()
  emailAdicional?: string;

  @IsString()
  direccionFiscal: string;

  @IsString()
  codigoPostal: string;

  @IsString()
  ciudad: string;

  @IsString()
  provincia: string;

  @IsString()
  pais: string;

  @IsOptional()
  @IsNumber()
  impuesto?: number;

  @IsOptional()
  @IsBoolean()
  recargoEquivalencia?: boolean;

  @IsOptional()
  @IsString()
  informacionAdicional?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  businessIds?: number[];

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  paymentMethodIds?: number[];  // ahora array
}