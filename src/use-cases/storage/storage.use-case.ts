import { Injectable } from '@nestjs/common';
import { Storage } from 'src/core/entities/storage';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { CreateStorageDto, UpdateStorageDto } from '../../core/dtos/storage.dto';
import { StorageFactoryService } from './storage-factory.service';
import { FakePathFinderUseCase } from '../pathFinder/fakePathFinder.use-case';

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

    public async addProductQuantity(StorageId: string, newProductQuantityId: string): Promise<Storage | Error> {
        try {
            const storage = await this.dataServices.storages.get(StorageId);
            if (!storage) {
                return new Error('Storage not found');
            }
    
            const productQuantity = await this.dataServices.productQuantities.get(newProductQuantityId);
            if (!productQuantity) {
                return new Error('ProductQuantity not found');
            }
    
            storage.productQuantities.push(productQuantity);
    
            return await this.dataServices.storages.update(StorageId, storage);
        } catch (error) {
            console.error(error);
            return new Error('An error occurred while adding product quantity');
        }
    }

    public async rebalance(StorageId: string, withOtherStorageId: string, dto: UpdateStorageDto): Promise<Storage | Error> {
        try {
            console.log('rebalancing...');
            const storage = await this.get(StorageId);
            const otherStorage = await this.get(withOtherStorageId);
    
            if (!storage ||!otherStorage) {
                return new Error('Storage not found');
            }
    
            if (storage.productQuantities.length === 0 || otherStorage.productQuantities.length === 0) {
                return new Error('Storage is empty');
            }
    
            console.log('rebalancing...');
            const storageQuantities = storage.productQuantities;
            const otherStorageQuantities = otherStorage.productQuantities;

            // !!!!! [NOT OPTIMAL SOLUTION] !!!!!
            otherStorageQuantities.map(otherStorageQuantity => {
                console.log(otherStorageQuantity.product.id);

                storageQuantities.map(storageQuantity => {
                    console.log(storageQuantity.product.id);

                    if (storageQuantity.product.id.toString() == otherStorageQuantity.product.id.toString()) {
                        console.log('found');
                        const tresholdStorage = storage.tresholdDifference
                        const tresholdOtherStorage = otherStorage.tresholdDifference

                        const treshholdQuantity = storageQuantity.quantity * (1+tresholdStorage)
                        const treshholdOtherQuantity = otherStorageQuantity.quantity * (1+tresholdOtherStorage)

                        console.log(treshholdQuantity, tresholdStorage, storageQuantity.quantity);
                        console.log(treshholdOtherQuantity, tresholdOtherStorage, otherStorageQuantity.quantity);

                        if (treshholdQuantity < treshholdOtherQuantity) {
                            const transfer = Math.floor(tresholdStorage*(1-tresholdOtherStorage)*otherStorageQuantity.quantity);
                            console.log(transfer);

                            storageQuantity.quantity += transfer;
                            otherStorageQuantity.quantity -= transfer;

                            console.log('products teleported');
                        }
                    }
                })
            })
            
            // После перемещения товаров обновляем информацию в базе данных
            await this.dataServices.storages.update(StorageId, storage);
            await this.dataServices.storages.update(withOtherStorageId, otherStorage);
    
            return storage;
        } catch (error) {
            console.error(error);
            return new Error('An error occurred during rebalancing');
        }
    }

    //find nearest and rebalance
    public async findNearestAndRebalance(StorageId: string, dto: UpdateStorageDto): Promise<Storage | Error> {
        const storage = await this.get(StorageId);
        if (!storage) {
            return new Error('Storage not found');
        }
        const storages = await this.getAll();
        if (!storages) {
            return new Error('Storages not found');
        }
        const nearest = await FakePathFinderUseCase.findNearestStorage(storage.latitude, storage.longitude,storages);
        
        this.rebalance(StorageId, nearest.id, dto);
        return storage;
    }
    
}