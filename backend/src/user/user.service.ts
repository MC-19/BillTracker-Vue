import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // ✅ Crear usuario (Solo 1 vez)
  async create(userDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({ where: { email: userDto.email } });
    if (existingUser) {
      throw new ConflictException('Este email ya está registrado');
    }
  
    // 📌 Aquí solo se guarda la contraseña, ya fue encriptada en AuthService.register()
    const newUser = this.userRepository.create({
      email: userDto.email,
      password: userDto.password, // ✅ Ahora solo se guarda sin volver a encriptar
      firstName: userDto.firstName,
      lastName1: userDto.lastName1,
      lastName2: userDto.lastName2,
    });
  
    return this.userRepository.save(newUser);
  }
  
  
  

  // ✅ Modificar usuario
  async update(id: number, updateData: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
  
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }
  
    Object.assign(user, updateData);
    return this.userRepository.save(user);
  }  

  // ✅ Eliminar usuario
  async delete(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
  
    user.active = false; // ❌ En vez de eliminar, lo desactivamos
    await this.userRepository.save(user);
  }
  

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ where: { active: true } });
  }  

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }    
}
