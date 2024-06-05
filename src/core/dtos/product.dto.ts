import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    public price: number;

    @IsString()
    @IsNotEmpty()
    public description: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) { }