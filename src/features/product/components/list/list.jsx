/**
 * List Component
 *
 * This component renders a product section on the homepage.
 * It receives a `section` prop containing metadata and product IDs.
 * On mount or when the section changes, it fetches the product data using those IDs.
 * While loading, it shows a fallback message. If no products are found, it informs the user.
 *
 * Props:
 * - section: {
 *     id: string,
 *     name: string,
 *     description?: string,
 *     items: string[] // Array of product IDs
 *   }
 *
 * Dependencies:
 * - fetchProductsByIds: Service function to fetch products by an array of IDs.
 * - Listing: Component used to render individual product cards.
 *
 * Example usage:
 * <List section={section} />
 */

import React, { useEffect, useState } from "react";
import { fetchProductsByIds } from "../../services/productAPI";
import { CiBarcode } from "react-icons/ci";
import Listing from "../listing/listing";

import "../../styles/list.scss";

function List({ section }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            if (!section?.items?.length) return;

            try {
                const data = await fetchProductsByIds(section.items);
                const productArray = Array.isArray(data)
                    ? data
                    : Object.values(data);
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
                <h2 className="list__name">
                    <CiBarcode />
                    {section?.name}
                </h2>
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
