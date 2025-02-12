import { InitialStateType } from '../contexts/UserContext.tsx';
import { ProductDataProps } from '../components/ProductItem/ProductItem.tsx';

type ShopStateTypes = 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'UPDATE_PRICE';

interface ShopReducerAction {
  type: ShopStateTypes;
  payload:
    | ProductDataProps[]
    | { total: number }
    | { products: ProductDataProps[] };
}

const shopReducer = (
  state: InitialStateType,
  action: ShopReducerAction
): InitialStateType => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', payload);
      return {
        ...state,
        products: payload.products,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART', payload);
      return {
        ...state,
        products: payload.products,
      };
    case 'UPDATE_PRICE':
      console.log('UPDATE_PRICE', payload);
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
