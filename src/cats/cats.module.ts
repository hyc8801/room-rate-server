import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cats } from './entities/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService, TypeOrmModule],
})
export class CatsModule {
  constructor(private readonly catsService: CatsService) {}
}
