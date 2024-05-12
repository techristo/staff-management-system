import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BusinessModule } from './business/business.module';
import { StaffmemberModule } from './staffmember/staffmember.module';



@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.URI,
      autoLoadEntities: true,
      ssl:{rejectUnauthorized: false},
      entities: [],
      synchronize: true,
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
