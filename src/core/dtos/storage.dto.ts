import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateStorageDto {
        
        @IsString()
        @IsNotEmpty()
        public productQuantities: string[];

        @IsString()
        @IsNotEmpty()
        public orders: string[];
}

export class UpdateStorageDto extends PartialType(CreateStorageDto) { }