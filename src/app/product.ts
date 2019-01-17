import {Supplier} from './supplier';


export class Product {
  id: number;
  prodName: string;
  prodType: string;
  price: number;
  quantity: number;
  supplier_id: Supplier;
}

