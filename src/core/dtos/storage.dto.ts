import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ProductQuantities } from '../entities';

export class CreateStorageDto {
        
        @IsString()
        @IsNotEmpty()
        public productQuantities: ProductQuantities[];

        // @IsString()
        // @IsNotEmpty()
        // public orders: string[];
}

export class UpdateStorageDto extends PartialType(CreateStorageDto) { }