import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // 📌 Definir que el usuario se loguea con "email"
  }

  async validate(email: string, password: string) {
    console.log("🔍 Ejecutando LocalStrategy con email:", email);

    const user = await this.authService.validateUser(email, password);
    if (!user) {
      console.log("❌ Fallo en la autenticación: credenciales incorrectas.");
      throw new UnauthorizedException("Correo o contraseña incorrectos.");
    }

    console.log("✅ Usuario autenticado en LocalStrategy:", user.email);
    return user;
  }
}

