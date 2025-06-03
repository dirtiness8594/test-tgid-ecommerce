import React, { useEffect, useState } from "react";
import "../../styles/list.scss";
import Listing from "../listing/listing";
import { CiBarcode } from "react-icons/ci";

import { fetchProductsByIds } from "../../services/productAPI";

function List({ section }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      if (!section?.items?.length) return;

      try {
        const data = await fetchProductsByIds(section.items);
        const productArray = Array.isArray(data) ? data : Object.values(data);
        setProducts(productArray);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }

    loadProducts();
  }, [section]);

  return (
    <div className={`list`}>
      <div className="list__wrapper">
        <h2 className="list__name"><CiBarcode />{section?.name}</h2>
        <p className="list__info">{section?.description}</p>
        <div className="list__shelf list__shelf--simple">
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
