/**
 * Checkout Page Component
 *
 * This component renders the checkout page of the store.
 * It retrieves cart items from the Zustand store and displays them in a list format.
 * If the cart is empty, it shows an empty message.
 * It also includes a "Finalize Purchase" button that triggers a placeholder action.
 *
 * Components used:
 * - Header: displays the site header/navigation
 * - Listing: renders individual cart items in read-only mode
 *
 * State management:
 * - Uses `useCartStore` from Zustand to access cart state.
 *
 * Styles:
 * - Custom SCSS styles from `checkout.scss`
 */


import { useCartStore } from "../../store/cartStore";
import Listing from "../../features/product/components/listing";
import Header from "../../features/header/components/header";

import "../styles/checkout.scss";

const Checkout = () => {
    const cart = useCartStore((state) => state.cart);

    const finalizePurchase = () => {
        alert("Próximas etapas para finalização");
        console.log("Carrinho atual: ", cart);
    };

    return (
        <>
            <Header />
            <section className="checkout">
                <h1 className="checkout__title">Checkout</h1>

                <div className="checkout__items">
                    {cart.length > 0 ? (
                        cart.map((product) => (
                            <Listing
                                key={product.id}
                                product={product}
                                readonly
                            />
                        ))
                    ) : (
                        <p className="checkout__empty">
                            Seu carrinho está vazio.
                        </p>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="checkout__footer">
                        <button
                            onClick={finalizePurchase}
                            className="checkout__button"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </section>
        </>
    );
};

export default Checkout;
