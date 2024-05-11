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
import { CreateStaffmemberDto } from './dto/create-staffmember.dto';
import { UpdateStaffmemberDto } from './dto/update-staffmember.dto';
import { StaffmemberService } from './staffmember.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('staffmember')
export class StaffmemberController {
  constructor(private staffmemberService: StaffmemberService) {}
  @UseGuards(AuthGuard)
  @Get('/get')
  getStaffmember() {
    return this.staffmemberService.findStaffmember();
  }

  @UseGuards(AuthGuard)
  @Post('/post')
  createStaffmember(@Body() createStaffmemberDto: CreateStaffmemberDto) {
    return this.staffmemberService.createStaffmember(createStaffmemberDto);
  }

  @UseGuards(AuthGuard)
  @Put('/put/:id')
  async updateStaffmemberById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStaffmemberDto: UpdateStaffmemberDto,
  ) {
    await this.staffmemberService.updateStaffmember(id, updateStaffmemberDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  async deleteStaffmemberById(@Param('id', ParseIntPipe) id: number) {
    await this.staffmemberService.deleteBusiness(id);
  }

 
}