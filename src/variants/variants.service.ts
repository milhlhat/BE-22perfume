import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { VariantEntity } from './entities/variant.entity';

@Injectable()
export class VariantsService {
  constructor(
    @InjectRepository(VariantEntity)
    private readonly variantsRepository: Repository<VariantEntity>,
  ) {}
  
  create(createVariantDto: CreateVariantDto) {
    return from(this.variantsRepository.save(createVariantDto));
  }

  findAll() {
    return from(this.variantsRepository.find());
  }

  findOne(id: number) {
    return from(this.variantsRepository.findOneBy({ id }));
  }

  update(id: number, updateVariantDto: UpdateVariantDto) {
    return from(this.variantsRepository.update(id, updateVariantDto));
  }

  remove(id: number) {
    return from(this.variantsRepository.delete(id));
  }
}
