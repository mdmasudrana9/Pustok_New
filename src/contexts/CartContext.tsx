"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
  condition: string;
  image: string;
  seller: string;
  action: "buy" | "borrow" | "donate" | "exchange";
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    book: any,
    action: "buy" | "borrow" | "donate" | "exchange"
  ) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (
    book: any,
    action: "buy" | "borrow" | "donate" | "exchange"
  ) => {
    const existingItem = cartItems.find(
      (item) => item.id === book.id && item.action === action
    );

    if (existingItem) {
      updateQuantity(book.id, existingItem.quantity + 1);
      return;
    }

    const newItem: CartItem = {
      id: book.id,
      title: book.title,
      author: book.author,
      price: action === "buy" ? book.price : action === "borrow" ? 2.99 : 0,
      quantity: 1,
      condition: book.condition,
      image: book.image,
      seller: book.seller?.name || "Unknown Seller",
      action,
    };

    setCartItems((prev) => [...prev, newItem]);

    toast({
      title: "Added to Cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Book removed from cart successfully.",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
