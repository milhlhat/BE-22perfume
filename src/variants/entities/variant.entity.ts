import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/base/base-entity';
import { ProductEntity } from 'src/products/entities/products.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

@Entity('variants')
export class VariantEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'int', default: null })
  price: number;

  @Column({ type: 'int', default: null })
  size: number;

  @Column()
  productId : number;

  @ManyToOne(() => ProductEntity, (product) => product.variants)
  product: ProductEntity;
}
