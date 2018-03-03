export interface ProductObject {
  'id'?: number; // missed at game-spot
  'name': string;
  'image': string;
  'status': 'onSale' | 'owned' | 'inCart';
  'price'?: number; // missed at game-spot
  'discount'?: number; // missed at game-spot
  'totalPrice'?: number; // missed at game-spot
  'url'?: string;
}
