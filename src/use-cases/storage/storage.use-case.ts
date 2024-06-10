import { Injectable } from '@nestjs/common';
import { Storage } from 'src/core/entities/Storage';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { CreateStorageDto, UpdateStorageDto } from '../../core/dtos/Storage.dto';
import { StorageFactoryService } from './Storage-factory.service';

@Injectable()
export class StorageUseCase {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly StorageFactoryService: StorageFactoryService
    ) {}

    public getAll(): Promise<Storage[]> {
        return this.dataServices.storages.getAll();
    }

    public get(StorageId: string): Promise<Storage> {
        return this.dataServices.storages.get(StorageId);
    }

    public create(dto: CreateStorageDto): Promise<Storage> {
        const storage = this.StorageFactoryService.create(dto);
        return this.dataServices.storages.create(storage);
    }

    public update(StorageId: string, dto: UpdateStorageDto): Promise<Storage> {
        const storage = this.StorageFactoryService.update(dto);
        return this.dataServices.storages.update(StorageId, storage);
    }
}