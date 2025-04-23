import { Controller, Get, Post, Param, Delete, Body, Patch } from '@nestjs/common';
import { SerieFacturaService } from './serie-factura.service';
import { CreateSerieFacturaDto } from './dto/create-serie-factura.dto';
import { UpdateSerieFacturaDto } from './dto/update-serie-factura.dto';

@Controller('series')
export class SerieFacturaController {
  constructor(private readonly serieService: SerieFacturaService) {}

  @Post(':businessId')
  create(
    @Param('businessId') businessId: number,
    @Body() dto: CreateSerieFacturaDto,
  ) {
    return this.serieService.create(businessId, dto);
  }

  @Get()
  findAll() {
    return this.serieService.findAll();
  }

  @Get('business/:id')
  findByBusiness(@Param('id') id: number) {
    return this.serieService.findByBusiness(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateSerieFacturaDto) {
    return this.serieService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.serieService.remove(id);
  }
}
