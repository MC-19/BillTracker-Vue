import { Controller, Post, Get, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UserBusinessService } from './user-business.service';
import { CreateUserBusinessDto } from './dto/create-user-business.dto';
import { UpdateUserBusinessDto } from './dto/update-user-business.dto';

@Controller('user-business')
export class UserBusinessController {
  constructor(private readonly userBusinessService: UserBusinessService) {}

  @Post()
  async assignUserToBusiness(@Body() createUserBusinessDto: CreateUserBusinessDto) {
    return this.userBusinessService.assignUserToBusiness(createUserBusinessDto);
  }

  @Get(':userId')
  async getBusinessesForUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userBusinessService.getBusinessesForUser(userId);
  }

  @Get('business/:businessId')
  async getUsersForBusiness(@Param('businessId', ParseIntPipe) businessId: number) {
    return this.userBusinessService.getUsersForBusiness(businessId);
  }

  @Patch(':userId/:businessId')
  async updateUserBusiness(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('businessId', ParseIntPipe) businessId: number,
    @Body() updateUserBusinessDto: UpdateUserBusinessDto,
  ) {
    return this.userBusinessService.updateUserBusiness(userId, businessId, updateUserBusinessDto);
  }

  @Delete(':userId/:businessId')
  async removeUserFromBusiness(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('businessId', ParseIntPipe) businessId: number,
  ) {
    return this.userBusinessService.removeUserFromBusiness(userId, businessId);
  }
}
