import { IsEmail, IsNotEmpty, MinLength, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  firstName?: string | null;

  @IsOptional()
  @IsString()
  lastName1?: string | null;

  @IsOptional()
  @IsString()
  lastName2?: string | null;

  @IsOptional() // ✅ Permite definir si el usuario será activo al crearlo
  @IsBoolean()
  active?: boolean;
}
