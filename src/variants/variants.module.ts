import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariantEntity } from './entities/variant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VariantEntity])],
  controllers: [VariantsController],
  providers: [VariantsService]
})
export class VariantsModule {}
