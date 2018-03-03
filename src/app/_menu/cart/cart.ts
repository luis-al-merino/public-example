import { ProductObject } from '../../_tile/tile';

export interface CartObject {
    products: ProductObject[];
    productCount?: number;
    totalPrice: number;
}
