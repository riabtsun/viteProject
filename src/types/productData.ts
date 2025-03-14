export interface ProductData {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface ProductDataQty extends ProductData {
  qty: number;
  totalPrice: number;
}

export interface OrderData {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  qty: number;
  totalPrice: number;
}
