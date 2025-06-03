/**
 * Listing Component
 *
 * This component renders a product item card, displaying product details such as images, name, price, and description.
 * It also allows the user to select a quantity and add the product to the shopping cart.
 *
 * Props:
 * - product: Object containing product data (name, images, price, description, friendlyUrl, id, quantity)
 * - readonly: Boolean to toggle between interactive mode (with quantity selector and add button) or readonly mode (shows only quantity)
 *
 * Features:
 * - Displays main product image and details using DetailImage and DetailListing subcomponents.
 * - Supports quantity increment and decrement with minimum quantity 1.
 * - Adds the selected quantity of the product to the cart by calling addToCart from cartStore.
 * - Wraps the entire item in a link to the product details page.
 *
 * Usage:
 * <Listing product={product} readonly={false} />
 */

import { useState } from "react";
import { useCartStore } from "../../../../store/cartStore";
import DetailListing from "../detailListing";
import DetailImage from "../detailImage";

const Listing = ({ product, readonly = false }) => {
    const { name, images, price, description, friendlyUrl, id } = product;
    const productPrice = price?.newPrice || price?.installment?.value;

    const [quantity, setQuantity] = useState(product.quantity || 1);
    const addToCart = useCartStore((state) => state.addToCart);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div
            className="list__item list__item--simple"
        >
            <DetailImage images={images} alt={name} />
            <DetailListing
                price={price}
                name={name}
                description={description || product.details}
            />
            <div className="list__adder">
                {readonly ? (
                    <span className="list__quantity-label">
                        Quantidade: {product.quantity}
                    </span>
                ) : (
                    <>
                        <div className="list__quantity">
                            <button
                                onClick={decrement}
                                className="list__quantity-btn"
                            >
                                -
                            </button>
                            <span className="list__quantity-value">
                                {quantity}
                            </span>
                            <button
                                onClick={increment}
                                className="list__quantity-btn"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => {
                                console.log(
                                    "Clicked Add with quantity:",
                                    quantity
                                );
                                addToCart(product, quantity);
                            }}
                            className="list__add-btn"
                        >
                            Adicionar ao carrinho
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Listing;
