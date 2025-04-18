import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserBusiness } from '../user-business/user-business.entity';
import { UserBusinessService } from '../user-business/user-business.service';
import { UserBusinessController } from '../user-business/user-business.controller';
import { BusinessModule } from '../business/business.module'; // 🔹 Importamos BusinessModule

@Module({
  imports: [TypeOrmModule.forFeature([User, UserBusiness]), BusinessModule], // 🔹 Ahora `BusinessRepository` está disponible
  controllers: [UserController, UserBusinessController],
  providers: [UserService, UserBusinessService],
  exports: [UserService, UserBusinessService],
})
export class UserModule {}
