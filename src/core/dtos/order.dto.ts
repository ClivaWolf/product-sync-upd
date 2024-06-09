import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto  {
        
        @IsNotEmpty()
        @IsString()
        public storage: string;

        @IsNotEmpty()
        @IsString()
        public delivery: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) { }