import { VariantEntity } from 'src/variants/entities/variant.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base-entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 1000, default: null })
  description: string;

  @OneToMany(() => VariantEntity, variant => variant.product)
  variants: VariantEntity[];
  
}
