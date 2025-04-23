/* src/business/dto/update-business.dto.ts */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSerieFacturaDto } from './create-serie-factura.dto';

export class UpdateSerieFacturaDto extends PartialType(CreateSerieFacturaDto) {}
