import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('beike_copy1')
export class SecondHouseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  district_name: string;

  @Column()
  quoted_price: number;

  @Column()
  beike_price: number;

  @Column({ nullable: true })
  dealed: number;

  @Column({ nullable: true })
  quoted: number;

  @Column({ nullable: true })
  customer: number;

  @Column({ nullable: true })
  showed: number;

  @Column()
  total: number;

  @Column()
  total_3room: number;

  @Column()
  total_2room: number;

  @Column()
  total_south: number;

  @Column()
  total_subway: number;

  @Column()
  total_3room_south_subway: number;

  @Column()
  total_3room_south: number;

  @Column()
  create_time: Date;
}
