import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BusinessModule } from './business/business.module';
import { StaffmemberModule } from './staffmember/staffmember.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '123',
      username: 'postgres',
      entities: [],
      database: 'smdata',
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UsersModule,
    BusinessModule,
    StaffmemberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
