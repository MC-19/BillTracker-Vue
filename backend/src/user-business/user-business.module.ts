import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBusiness } from './user-business.entity';
import { UserBusinessService } from './user-business.service';
import { UserBusinessController } from './user-business.controller';
import { User } from '../user/user.entity';
import { Business } from '../business/business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserBusiness, User, Business])],
  controllers: [UserBusinessController],
  providers: [UserBusinessService],
  exports: [UserBusinessService],
})
export class UserBusinessModule {}
