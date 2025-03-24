import { Controller, Post, Body, Request, UseGuards, Get, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserService } from '../user/user.service'; // ✅ Importa UserService

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService // ✅ Inyecta UserService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log("✅ Usuario autenticado, generando token...");
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  // ✅ Nuevo endpoint protegido con JWT
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    const user = await this.userService.findByEmail(req.user.email); // ✅ Ahora se usa `this.userService`
    
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return {
      id: user.id,
      firstName: user.firstName,
      lastName1: user.lastName1,
      lastName2: user.lastName2,
      email: user.email,
    };
  }
}
