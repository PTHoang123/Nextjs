import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface CartState {
    cart: number;
}

interface CartContextProps {
    state: CartState;
    dispatch: React.Dispatch<ActionType>;
}

const initialState: CartState = {
    cart: 0,
};

type ActionType = { type: 'INCREMENT_CART' };

const reducer = (state: CartState, action: ActionType): CartState => {
    switch (action.type) {
        case 'INCREMENT_CART':
            return { ...state, cart: state.cart + 1 };
        default:
            return state;
    }
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
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