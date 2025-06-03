import { useState } from 'react';
import '../styles/Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">Meu Site</h1>

      <button className={`menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav className="menu">
          <a href="/">Home</a>
          <a href="/produtos">Produtos</a>
          <a href="/contato">Contato</a>
        </nav>
      )}
    </header>
  );
}
