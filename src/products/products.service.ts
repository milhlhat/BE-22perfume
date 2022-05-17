import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { ProductEntity } from 'src/products/entities/products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './interfaces/products.interface';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  create(product: CreateProductDto) {
    return from(this.productsRepository.save(product));
  }

  findAll() {
    return from(this.productsRepository.find({ relations: ['variants'] }));
  }

  findOne(id: number) {
    return from(this.productsRepository.findOneBy({ id }));
  }

  delete(id: number) {
    return from(this.productsRepository.delete(id));
  }

  update(id: number, product: Partial<Products>) {
    return from(this.productsRepository.update(id, product));
  }
}
