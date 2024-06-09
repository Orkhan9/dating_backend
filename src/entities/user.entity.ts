import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    name: 'phone_number',
    nullable: false,
  })
  phoneNumber: string;

  @Column({
    name: 'social_media_id',
    nullable: false,
  })
  socialMediaId: string;

  @Column({
    nullable: false,
  })
  password: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}
