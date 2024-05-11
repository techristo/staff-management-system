import { Module } from '@nestjs/common';
import { StaffmemberService } from './staffmember.service';
import { StaffmemberController } from './staffmember.controller';
import { Staffmember } from './entities/staffmember.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Staffmember])],
  controllers: [StaffmemberController],
  providers: [StaffmemberService],
})
export class StaffmemberModule {}
