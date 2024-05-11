import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staffmember } from './entities/staffmember.entity'
import {
  StaffmembersType
} from '../utils/types';

@Injectable()
export class StaffmemberService {
  constructor(
    @InjectRepository(Staffmember) private staffmemberRepository: Repository<Staffmember>,
  ) {}

  findStaffmember() {
    return this.staffmemberRepository.find();
  }

  createStaffmember(staffmemberDetails: StaffmembersType) {
    const newStaffmember = this.staffmemberRepository.create({
      ...staffmemberDetails
    });
    return this.staffmemberRepository.save(newStaffmember);
  }

  updateStaffmember(id: number, staffmemberDetails: StaffmembersType) {
    return this.staffmemberRepository.update({ id }, { ...staffmemberDetails });
  }

  deleteBusiness(id: number) {
    return this.staffmemberRepository.delete({ id });
  }

  
}