import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Product } from '../entities';

export class CreateProductQuantitiesDto {
    @IsNumber()
    @IsNotEmpty()
    public quantity: number;

    @IsNotEmpty()
    @IsString()
    public product: string;
}

export class UpdateProductQuantitiesDto extends PartialType(CreateProductQuantitiesDto) { }