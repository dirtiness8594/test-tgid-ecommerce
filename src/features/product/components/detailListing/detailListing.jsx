import React from "react";

/**
 * Component that displays detailed information about a product,
 * including name, description, price and installment options.
 */
function DetailListing({ name, description, price }) {
    const { oldPrice, newPrice, installment } = price || {};
    const installmentText =
        installment?.amount && installment?.value
            ? `${installment.amount}x de R$ ${installment.value}`
            : null;

    return (
        <section className="list__details">
            <ProductDescription name={name} description={description} />
            <ProductPrice oldPrice={oldPrice} newPrice={newPrice} />
            {installmentText && <ProductInstallment text={installmentText} />}
        </section>
    );
}

const ProductDescription = ({ name, description }) => (
    <>
        <h3 className="list__name">{name}</h3>
        {description && (
            <p className="list__shortinfo">{description}</p>
        )}
    </>
);

const ProductPrice = ({ oldPrice, newPrice }) => (
    <div className="list__price-wrapper">
        {oldPrice && (
            <span className="list__oldprice">R$ {oldPrice}</span>
        )}
        {newPrice && (
            <span className="list__price">R$ {newPrice}</span>
        )}
    </div>
);

const ProductInstallment = ({ text }) => (
    <div className="list__installment">
        <pre className="list__steps">{text}</pre>
        <pre className="list__freight">Frete grátis full</pre>
    </div>
);

export default DetailListing;
