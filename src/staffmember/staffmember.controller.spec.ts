import { Test, TestingModule } from '@nestjs/testing';
import { StaffmemberController } from './staffmember.controller';
import { StaffmemberService } from './staffmember.service';

describe('StaffmemberController', () => {
  let controller: StaffmemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffmemberController],
      providers: [StaffmemberService],
    }).compile();

    controller = module.get<StaffmemberController>(StaffmemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
