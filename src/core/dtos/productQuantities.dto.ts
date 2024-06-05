import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Product } from '../entities';

export class CreateProductQuantitiesDto {
    @IsNumber()
    @IsNotEmpty()
    public quantity: number;

    @IsNotEmpty()
    public products: Product[];
}

export class UpdateProductQuantitiesDto extends PartialType(CreateProductQuantitiesDto) { }