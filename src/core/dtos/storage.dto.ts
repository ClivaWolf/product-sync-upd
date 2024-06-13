import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ProductQuantities } from '../entities';

export class CreateStorageDto {
        
        // @IsString()
        // @IsNotEmpty()
        public productQuantities?: ProductQuantities[];

        // for demonstration
        @IsNumber()
        @IsNotEmpty()
        latitude: number;

        @IsNumber()
        @IsNotEmpty()
        longitude: number;

        @IsNumber()
        @IsNotEmpty()
        tresholdDifference: number;
        // @IsString()
        // @IsNotEmpty()
        // public orders: string[];
}

export class UpdateStorageDto extends PartialType(CreateStorageDto) { }