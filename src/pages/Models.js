import React from 'react';
import styled from 'styled-components';

import products from '../data/products';
import Image from '../components/shared/Image';

export default props => {

    const handleProductClicked = id => {
        console.log(id);
    }

    return (
        <StyledProducts>
            <StyledProductsList>
                <h2>Take a pick</h2>
                {products.map(product => (
                    <StyledProductItem key={product.id} onClick={() => handleProductClicked(product.id)}>
                        <Image className="product-image" src={`../img/${product.thumbnail}`} alt="nike shoes" />
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-is-chosen">{product.isChosen}</div>
                    </StyledProductItem>
                ))}
            </StyledProductsList>
            <StyledProductsDetails>
                <h1>Product Details</h1>
            </StyledProductsDetails>
        </StyledProducts>
    );
}

const StyledProducts = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const StyledProductsList = styled.div`
    width: 500px;
    padding: 10px;
    padding-top: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    -webkit-box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);
    box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);

    h2 {
        text-align: center;
    }
`;

const StyledProductItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .product-image {
        max-width: 150px;
        height: 100%;
        margin: 20px 5px;
    }

    .product-name {
        flex: 1;
    }

    .product-price {
        flex: 0 60px;
    }

    .product-is-chosen {
        flex: initial;
    }

    div {
        margin: 10px;
    }
`;

const StyledProductsDetails = styled.div`
    flex: 1;
`;
