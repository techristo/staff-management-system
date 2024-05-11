import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './entities/business.entity'
import {
  BusinessType
} from '../utils/types';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business) private businessRepository: Repository<Business>,
  ) {}

  findBusiness() {
    return this.businessRepository.find();
  }

  createBusiness(businessDetails: BusinessType) {
    const newBusiness = this.businessRepository.create({
      ...businessDetails
    });
    return this.businessRepository.save(newBusiness);
  }

  updateBusiness(id: number, businessDetails: BusinessType) {
    return this.businessRepository.update({ id }, { ...businessDetails });
  }

  deleteBusiness(id: number) {
    return this.businessRepository.delete({ id });
  }

  
}