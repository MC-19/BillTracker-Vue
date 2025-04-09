import {
    IsString,
    IsEmail,
    IsOptional,
    IsBoolean,
    IsNumber,
    IsEnum,
    IsArray,
    IsInt,
  } from 'class-validator';
  
  export enum TipoContacto {
    CLIENTE = 'cliente',
    PROVEEDOR = 'proveedor',
    AMBAS = 'ambas',
  }
  
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
    @IsInt({ each: true })
    businessIds?: number[];
  
    @IsOptional()
    @IsInt()
    paymentMethodId?: number;
  }
  