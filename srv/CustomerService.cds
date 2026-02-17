using { btp.starterkit as stk } from '../db/schema';

service CustomerService {
    entity Customers as projection on stk.Customers;
    entity Orders as projection on stk.Orders;
    entity Products as projection on stk.Products;
    entity OrdersProducts as projection on stk.OrderProducts;
};