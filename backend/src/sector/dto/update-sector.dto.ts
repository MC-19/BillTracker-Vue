import { IsOptional, IsString } from 'class-validator';

export class UpdateSectorDto {
  @IsOptional()
  @IsString()
  nombre?: string;
}
