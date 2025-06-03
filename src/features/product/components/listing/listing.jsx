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
    <a className="list__item list__item--simple" href={`/product/${friendlyUrl || id}`}>
      <DetailImage images={images} alt={name} />
      <DetailListing
        price={price}
        name={name}
        description={description || product.details}
      />
      <div className="list__adder">
        {readonly ? (
          <span className="list__quantity-label">Quantidade: {product.quantity}</span>
        ) : (
          <>
            <div className="list__quantity">
              <button
                onClick={decrement}
                className="list__quantity-btn"
              >
                -
              </button>
              <span className="list__quantity-value">{quantity}</span>
              <button
                onClick={increment}
                className="list__quantity-btn"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                console.log("Clicked Add with quantity:", quantity);
                addToCart(product, quantity);
              }}
              className="list__add-btn"
            >
              Adicionar ao carrinho
            </button>
          </>
        )}
      </div>
    </a>
  );
};

export default Listing;
