import { IsEnum, IsOptional } from 'class-validator';

export class UpdateUserBusinessDto {
  @IsOptional()
  @IsEnum(['admin', 'editor', 'viewer'])
  role?: 'admin' | 'editor' | 'viewer';
}
