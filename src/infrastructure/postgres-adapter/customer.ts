//customer postgress adapter

import { Customer } from "../../domain/entities/customer";
import { ICustomerRepository } from "../../repository/customer";

export class PostgresCustomerRepository implements ICustomerRepository {

    async create(customer: Customer): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async find(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
}