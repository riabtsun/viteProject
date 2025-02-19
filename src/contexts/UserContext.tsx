// import { PropsWithChildren, useReducer, useState } from 'react';
// import { UserContextProvider } from './UserContextProvider.ts';
// import shopReducer from '../reducers/shopReducer.ts';
// import { ProductDataProps } from '../components/ProductItem/ProductItem.tsx';
//
// export interface UserNameState {
//   name: string;
//   setName: (newName: string) => void;
// }
//
// export interface UserShopState extends UserNameState {
//   total: number,
//   products: ProductDataProps[];
//   addToCart: (product: ProductDataProps) => void
// }
//
// const initialShopState: UserShopState = {
//   name: '',
//   setName: () => {
//   },
//   total: 0,
//   products: [],
//   addToCart: () => {
//   },
// };
//
// const UserContext = ({ children }: PropsWithChildren) => {
//   const [userName, setUserName] = useState<string>('');
//   const [state, dispatch] = useReducer(shopReducer, initialShopState);
//
//   const handleChangeName = (newName: string): void => {
//     setUserName(newName);
//   };
//
//   const addToCart = (product: ProductDataProps) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };
//
//   const value = {
//     name: userName,
//     setName: handleChangeName,
//     total: state.total,
//     products: state.products,
//     addToCart,
//   };
//
//   return (
//     <UserContextProvider.Provider value={value}>
//       {children}
//     </UserContextProvider.Provider>
//   );
// };
//
// export default UserContext;
