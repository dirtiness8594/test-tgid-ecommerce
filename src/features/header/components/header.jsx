/**
 * Header Component
 *
 * Renders the main site header including:
 * - Logo linking to home
 * - Shopping cart icon with a badge displaying the total quantity of items in the cart
 * - A collapsible menu with navigation links
 *
 * State Management:
 * - Uses local state (`useState`) to control mobile menu toggle
 * - Uses `useCartStore` (Zustand) to access current cart state and calculate item total
 *
 * Styling:
 * - Custom SCSS styles from `Header.scss`
 * - Uses BEM-style class names (e.g., header__logo, header__cart)
 *
 * Dependencies:
 * - `react-icons` for cart icon (`AiOutlineShoppingCart`)
 * - Zustand for global cart state management
 */


import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "../../../store/cartStore";

import "../styles/Header.scss";

function Header() {
    const [open, setOpen] = useState(false);
    const cartItems = useCartStore((state) => state.cart);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header">
            <h1 className="header__logo">
                <a href="/">My Store</a>
            </h1>

            <a title="Ver carrinho" href="/checkout" className="header__cart">
                <AiOutlineShoppingCart />
                {totalItems > 0 && (
                    <span className="header__cart-badge">{totalItems}</span>
                )}
            </a>

            <button
                className={`header__menu-btn ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {open && (
                <nav className="header__menu">
                    <a href="/">Home</a>
                    <a href="/">Produtos</a>
                    <a href="/">Contato</a>
                </nav>
            )}
        </header>
    );
}

export default Header;
