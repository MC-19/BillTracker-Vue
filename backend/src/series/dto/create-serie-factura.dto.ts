import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSerieFacturaDto {
  @IsNotEmpty()
  @IsString()
  codigo: string;
}
