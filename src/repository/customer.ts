import { Customer } from "../domain/entities/customer";

export interface ICustomerRepository {
  create(customer: Customer): Promise<boolean>;
  find(id: string): Promise<Customer>;
}