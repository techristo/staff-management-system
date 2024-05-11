import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity({ name: 'business' })
export class Business {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column({ nullable: false })
    name: string;
  
    @Column({ nullable: false })
    location: string;
  
    @Column({ nullable: true })
    type: string;
  
   
}

