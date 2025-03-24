import { IsOptional, IsString, IsEmail, MinLength, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsString()
  firstName?: string | null;

  @IsOptional()
  @IsString()
  lastName1?: string | null;

  @IsOptional()
  @IsString()
  lastName2?: string | null;

  @IsOptional() // ✅ Se puede cambiar el estado del usuario
  @IsBoolean()
  active?: boolean;
}
