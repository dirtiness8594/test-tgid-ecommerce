/**
 * Zustand store for managing the shopping cart with local persistence.
 *
 * State:
 * - cart: Array of products in the cart, each with a quantity.
 *
 * Actions:
 * - addToCart(product, quantity): Adds a product to the cart or increments quantity if it already exists.
 * - removeFromCart(id): Removes a product from the cart by ID.
 * - clearCart(): Clears all items from the cart.
 *
 * Persistence:
 * - Cart data is saved to localStorage under the key "cart-storage".
 *
 * Usage example:
 * 
 * import { useCartStore } from "./path/to/cartStore";
 * 
 * const addProduct = () => {
 *   useCartStore.getState().addToCart(product, 2);
 * };
 * 
 * const itemsInCart = useCartStore((state) => state.cart);
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product, quantity = 1) => {
                const existing = get().cart.find(
                    (item) => item.id === product.id
                );
                if (existing) {
                    set({
                        cart: get().cart.map((item) =>
                            item.id === product.id
                                ? {
                                      ...item,
                                      quantity: item.quantity + quantity,
                                  }
                                : item
                        ),
                    });
                } else {
                    set({ cart: [...get().cart, { ...product, quantity }] });
                }
            },
            removeFromCart: (id) => {
                set({ cart: get().cart.filter((item) => item.id !== id) });
            },
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: "cart-storage",
        }
    )
);
