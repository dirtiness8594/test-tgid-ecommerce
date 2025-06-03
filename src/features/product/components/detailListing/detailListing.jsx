import React from "react";

function DetailListing({ name, description, price }) {
    const { oldPrice, newPrice, installment } = price || {};
    const installmentText =
        installment && installment.amount && installment.value
            ? `${installment.amount}x de R$ ${installment.value}`
            : null;

    return (
        <div className="list__details">
            <ProductDescription name={name} description={description} />
            <ProductPrice oldPrice={oldPrice} newPrice={newPrice} />
            {installmentText && <ProductInstallment text={installmentText} />}
        </div>
    );
}

const ProductPrice = ({ oldPrice, newPrice }) => {
    return (
        <>
            {oldPrice && <span className="list__oldprice">R$ {oldPrice}</span>}
            {newPrice && <span className="list__price">R$ {newPrice}</span>}
        </>
    );
};

const ProductInstallment = ({ text }) => (
    <div className="list__installment">
        <pre className="list__steps">{text}</pre>
        <pre className="list__freight">Frete grátis full</pre>
    </div>
);

const ProductDescription = ({ name, description }) => (
    <>
        <h3 className="list__name">{name}</h3>
        <p className="list__shortinfo">{description}</p>
    </>
);

export default DetailListing;
