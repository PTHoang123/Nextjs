// pages/layout.tsx
import React from 'react';
import { CartProvider } from '../context/CartContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <main>{children}</main>
        </CartProvider>
    );
}