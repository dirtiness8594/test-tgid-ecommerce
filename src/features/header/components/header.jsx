import { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from '../../../store/cartStore';

import '../styles/Header.scss';

function Header() {
  const [open, setOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cart);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
        <h1 className="header__logo">
        <a href="/">
          Meu Site
        </a>
          </h1>


      <a title="Ver carrinho" href="/checkout" className="header__cart">
        <AiOutlineShoppingCart />
        {totalItems > 0 && <span className="header__cart-badge">{totalItems}</span>}
      </a>

      <button
        className={`header__menu-btn ${open ? 'open' : ''}`}
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

export default Header