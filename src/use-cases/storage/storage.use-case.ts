import { Injectable } from '@nestjs/common';
import { Storage } from 'src/core/entities/storage';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { CreateStorageDto, UpdateStorageDto } from '../../core/dtos/storage.dto';
import { StorageFactoryService } from './storage-factory.service';

@Injectable()
export class StorageUseCase {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly StorageFactoryService: StorageFactoryService
    ) { }

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

    public async rebalance(StorageId: string, withOtherStorageId: string, dto: UpdateStorageDto): Promise<Storage | Error> {
        //вытаскиваем весь товар на текущем складе
        //вытаскиваем весь товар на другом складе
        //поочерёдно сравниваем товар нынешнего склада с товаром другого склада
        //если товара в нынешнем складе меньше чем 1/2 от товара в другом складе, то
        //перемещаем из другого склада в нынешний третью часть
        //пример - в текущем складе 30 ед товара, в другом складе 100 ед. товара
        //перемещаем 100/3 = 33 ед. из другого склада в нынешний склад
        //в текущем складе теперь 63 ед. товара, в другом складе осталось 67 ед. товара
        try {
            const storage = await this.get(StorageId);
            const otherStorage = await this.get(withOtherStorageId);

            if (!storage || !otherStorage) {
                return new Error('Storage not found');
            }

            if (storage.productQuantities.length === 0 || otherStorage.productQuantities.length === 0) {
                return new Error('Storage is empty');
            }

            const storageQuantities = storage.productQuantities;
            const otherStorageQuantities = otherStorage.productQuantities;

            otherStorageQuantities.forEach(otherStorageQuantityId => {

            })

            
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}