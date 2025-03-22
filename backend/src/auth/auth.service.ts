import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Injectable, ConflictException } from '@nestjs/common';
import { MailService } from '../mail/mail.service';


@Injectable()
export class AuthService {
    constructor(
      private userService: UserService,
      private jwtService: JwtService,
      private mailService: MailService, 
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (!user) return null; // Usuario no encontrado
      
        console.log("🔑 Contraseña ingresada:", pass);
        console.log("🔒 Hash en la base de datos:", user.password);
      
        const isMatch = await bcrypt.compare(pass, user.password);
        console.log(isMatch ? "✅ Contraseña válida" : "❌ Contraseña incorrecta");
      
        if (isMatch) {
          const { password, ...result } = user;
          return result;
        }
      
        return null;
      }
      

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }  

  async register(createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Este email ya está registrado');
    }
  
    console.log("📝 Contraseña recibida:", createUserDto.password);
    
    const salt = await bcrypt.genSalt(10);
    console.log("🔹 Salt generado:", salt);
  
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    console.log("🔒 Hash generado antes de guardar:", hashedPassword);
  
    const newUser = await this.userService.create({
      ...createUserDto,
      password: hashedPassword, // ✅ Aquí debería ir el hash correcto
    });
  
    console.log("📝 Usuario que se va a guardar en la DB:", newUser);
  
    await this.mailService.sendWelcomeEmail(newUser.email);
  
    return newUser;
  }
  
  
}
