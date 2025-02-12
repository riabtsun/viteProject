import { createContext, PropsWithChildren, useReducer, useState } from 'react';
import shopReducer from '../reducers/ShopReducer.tsx';
import { ProductDataProps } from '../components/ProductItem/ProductItem.tsx';

export interface InitialStateType {
  name: string;
  setName: (newName: string) => void;
  total: number;
  products: [];
}

export const UserContextProvider = createContext<InitialStateType | null>(null);
UserContextProvider.displayName = 'UserContext';

const UserContext = ({ children }: PropsWithChildren) => {
  const [userName, setUserName] = useState<string>('');

  const handleChangeName = (newName: string): void => {
    setUserName(newName);
  };
  const initialState: InitialStateType = {
    name: userName,
    setName: handleChangeName,
    total: 0,
    products: [],
  };
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: ProductDataProps) => {
    const updatedCart: ProductDataProps[] = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({ type: 'ADD_TO_CART', payload: { products: updatedCart } });
  };

  const removeFromCart = (product: ProductDataProps) => {
    const updatedCart: ProductDataProps[] = state.products.filter(
      (currentProduct: ProductDataProps) => currentProduct.id !== product.id
    );
    updatePrice(updatedCart);
    dispatch({ type: 'REMOVE_FROM_CART', payload: { products: updatedCart } });
  };

  const updatePrice = (products: ProductDataProps[]) => {
    let totalPrice: number = 0;
    products.forEach((product: ProductDataProps) => {
      totalPrice += product.unitPrice;
    });
    dispatch({ type: 'UPDATE_PRICE', payload: { total: totalPrice } });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return (
    <UserContextProvider.Provider value={value}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default UserContext;
