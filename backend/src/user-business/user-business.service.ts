import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBusiness } from './user-business.entity';
import { CreateUserBusinessDto } from './dto/create-user-business.dto';
import { UpdateUserBusinessDto } from './dto/update-user-business.dto';
import { User } from '../user/user.entity';
import { Business } from '../business/business.entity';

@Injectable()
export class UserBusinessService {
  constructor(
    @InjectRepository(UserBusiness)
    private readonly userBusinessRepository: Repository<UserBusiness>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}

  async assignUserToBusiness(dto: CreateUserBusinessDto): Promise<UserBusiness> {
    const user = await this.userRepository.findOne({ where: { id: dto.userId } });
    const business = await this.businessRepository.findOne({ where: { id: dto.businessId } });

    if (!user || !business) {
      throw new NotFoundException('Usuario o negocio no encontrado');
    }

    const userBusiness = this.userBusinessRepository.create({
      user_id: dto.userId,
      business_id: dto.businessId,
      role: dto.role,
    });

    return this.userBusinessRepository.save(userBusiness);
  }

  async getBusinessesForUser(userId: number): Promise<Business[]> {
    const userBusinesses = await this.userBusinessRepository.find({
      where: { user_id: userId }, // 🔹 Cambiado de `userId` a `user_id`
      relations: ['business'],
    });

    return userBusinesses.map((ub) => ub.business);
  }

  async getUsersForBusiness(businessId: number): Promise<User[]> {
    const userBusinesses = await this.userBusinessRepository.find({
      where: { business_id: businessId }, // 🔹 Cambiado de `businessId` a `business_id`
      relations: ['user'],
    });

    return userBusinesses.map((ub) => ub.user);
  }

  async updateUserBusiness(
    userId: number,
    businessId: number,
    updateUserBusinessDto: UpdateUserBusinessDto,
  ): Promise<UserBusiness> {
    const userBusiness = await this.userBusinessRepository.findOne({
      where: { user_id: userId, business_id: businessId }, // 🔹 Corrección aquí
    });

    if (!userBusiness) {
      throw new NotFoundException('Relación usuario-negocio no encontrada');
    }

    Object.assign(userBusiness, updateUserBusinessDto);
    return this.userBusinessRepository.save(userBusiness);
  }

  async removeUserFromBusiness(userId: number, businessId: number): Promise<void> {
    const userBusiness = await this.userBusinessRepository.findOne({
      where: { user_id: userId, business_id: businessId }, // 🔹 Corrección aquí
    });

    if (!userBusiness) {
      throw new NotFoundException('Relación usuario-negocio no encontrada');
    }

    await this.userBusinessRepository.remove(userBusiness);
  }
}
