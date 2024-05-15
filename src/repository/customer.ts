import { Customer } from "../domain/customer";

export interface ICustomerRepository {
  create(customer: Customer): Promise<boolean>;
  find(id: string): Promise<Customer>;
}