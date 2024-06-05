import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { IGenericRepository } from '../../../core';

@Injectable()
export class PostgreGenericRepository<T> implements IGenericRepository<T> {
    private _repository: any;
    private _populate: string[]

    constructor(repository: any, populate: string[] = []) {
        this._repository = repository;
        this._populate = populate;
    }

    getAll(): Promise<T[]> {
        return this._repository.find({
            relations: this._populate
        });
    }

    get(id: string): Promise<T> {
        return this._repository.findOne(id, {
            relations: this._populate
        });
    }

    create(item: T): Promise<T> {
        return this._repository.save(item);
    }

    update(id: string, item: T) {
        return this._repository.update(id, item);
    }
}