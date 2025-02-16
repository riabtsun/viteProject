import { UserShopState } from '../contexts/UserContext.tsx';
import { ProductDataProps } from '../components/ProductItem/ProductItem.tsx';

export interface ActionState {
  type: string;
  payload?: ProductDataProps;
}


const shopReducer = (state: UserShopState, action: ActionState) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART': {
      console.log('Add to cart', payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default shopReducer;