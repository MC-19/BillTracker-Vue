import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSectorDto {
  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  label: string;
}
