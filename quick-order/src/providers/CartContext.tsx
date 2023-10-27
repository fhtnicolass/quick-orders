import React, { createContext, useContext, useReducer, useEffect, ReactNode, useState } from 'react';
import { DishSelection, Order } from '../interfaces/Order';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Order }
  | { type: 'REMOVE_FROM_CART'; payload: Order }

type CartContextType = {
  cart: Order[];
  dispatch: React.Dispatch<CartAction>;
  isCartOpen: boolean;
  toggleCartOpen: () => void;
};

const cartReducer = (state: Order[], action: CartAction): DishSelection[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  const [isCartOpen, setIsCardOpen] = useState(false)

  const toggleCartOpen = () => {
    setIsCardOpen(!isCartOpen)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch, isCartOpen, toggleCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};