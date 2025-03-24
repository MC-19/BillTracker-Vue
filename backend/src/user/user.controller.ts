import { Controller, Post, Patch, Delete, Get, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() userData: UpdateUserDto) {
    return this.userService.update(id, userData);
  }

  // ✅ Nueva ruta para reactivar un usuario
  @Patch(':id/reactivate')
  reactivate(@Param('id', ParseIntPipe) id: number) {
    return this.userService.update(id, { active: true });
  }

  // ✅ Ahora solo desactiva en vez de eliminar
  @Delete(':id')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
