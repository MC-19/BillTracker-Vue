import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSectorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
