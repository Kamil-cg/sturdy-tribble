// db/schema.cds

namespace btp.starterkit;

using {
    cuid,
    managed
} from '@sap/cds/common';

type OrderStatus : Integer enum {
    NEW       = 0;
    PROCESSED = 1;
    SHIPPED   = 2;
    DELIVERED = 3;
    CANCELLED = -1;
};

entity Customers : cuid, managed {
    name   : String(255);
    email  : String(255);
    active : Boolean;
    orders : Association to many Orders
                 on orders.customer = $self;
};

entity Orders : cuid, managed {
    status        : OrderStatus;
    delivery_date : Date;
    cost          : Decimal(10, 2);
    customer      : Association to one Customers;
    products      : Composition of many OrderProducts
                        on products.order = $self;
};

entity OrderProducts {
    key order    : Association to one Orders;
    key product  : Association to one Products;
        quantity : Integer;
};

entity Products : cuid, managed {
    name  : String(100);
    price : Decimal(10, 2)
};