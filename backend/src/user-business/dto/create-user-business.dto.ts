import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserBusinessDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  businessId: number;

  @IsEnum(['admin', 'editor', 'viewer'])
  role: 'admin' | 'editor' | 'viewer';
}
