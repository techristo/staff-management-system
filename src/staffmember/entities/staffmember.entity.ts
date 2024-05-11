import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity({ name: 'staffmembers' })
export class Staffmember {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column({ nullable: false })
    fname: string;
  
    @Column({ nullable: false })
    lname: string;
  
    @Column({ nullable: false })
    email: string;
  
    @Column({ nullable: false })
    position: string;

    @Column({ nullable: false })
    btype: string;

    @Column({ nullable: true })
    phone: string;
}
