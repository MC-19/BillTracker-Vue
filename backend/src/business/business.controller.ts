import { Controller, Post, Get, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessService.create(createBusinessDto);
  }

  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.businessService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBusinessDto: UpdateBusinessDto) {
    return this.businessService.update(id, updateBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.businessService.remove(id);
  }

  @Post(':id/series')
  createSerie(
    @Param('id') id: number,
    @Body('codigo') codigo: string
  ) {
    return this.businessService.createSerie(id, codigo);
  }
}
