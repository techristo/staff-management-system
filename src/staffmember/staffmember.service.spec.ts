import { Test, TestingModule } from '@nestjs/testing';
import { StaffmemberService } from './staffmember.service';

describe('StaffmemberService', () => {
  let service: StaffmemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffmemberService],
    }).compile();

    service = module.get<StaffmemberService>(StaffmemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
