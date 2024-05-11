import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { BusinessService } from './business.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}
  @UseGuards(AuthGuard)
  @Get('/get')
  getBusiness() {
    return this.businessService.findBusiness();
  }

  @UseGuards(AuthGuard)
  @Post('/post')
  createBusiness(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessService.createBusiness(createBusinessDto);
  }

  @UseGuards(AuthGuard)
  @Put('/put/:id')
  async updateBusinessById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    await this.businessService.updateBusiness(id, updateBusinessDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  async deleteBusinessById(@Param('id', ParseIntPipe) id: number) {
    await this.businessService.deleteBusiness(id);
  }

 
}