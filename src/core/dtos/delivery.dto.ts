import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDeliveryDto {
    
    @IsNotEmpty()
    @IsString()
    public fromStorage: string;

    @IsNotEmpty()
    @IsString()
    public ProductQuantities: string[];
}

export class UpdateDeliveryDto extends PartialType(CreateDeliveryDto) { }