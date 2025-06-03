import React, { useEffect, useState } from "react";
import "../../styles/list.scss";
import Listing from "../listing/listing";
import { fetchProductsByIds } from "../../services/productAPI";

function List({ section }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      if (!section?.items?.length) return;

      try {
        const data = await fetchProductsByIds(section.items);
        // Verifica se data é objeto e transforma em array
        const productArray = Array.isArray(data) ? data : Object.values(data);
        setProducts(productArray);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }

    loadProducts();
  }, [section]);

  console.log("Prod ", products)

  return (
    <div className={`product__list`}>
      <div className="product__list__wrapper">
        <h2 className="product__list__name">{section?.name}</h2>
        <p className="product__list__info">{section?.description}</p>

        
        <div className="product__shelf product__shelf--simple">
          {products ? (
            products.map((product, index) => (
              <Listing key={index} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}

        </div>
      </div>
    </div>
  );
}

export default List;
