import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    public id: string;

    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) { }

