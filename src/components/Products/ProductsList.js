import React from 'react';
import styled, { css } from 'styled-components';

import Image from '../shared/Image';
import Spinner from '../shared/Spinner';
import PriceFormatter from '../shared/PriceFormatter';

export default props => {

    const { products, chosenProduct, isSmallScreen } = props;

    const handleProductClicked = product => {
        props.onClick(product);
    }

    return (
        <StyledProductsList isSmallScreen={isSmallScreen}>
            <h2>Take a pick</h2>
            {products === null
                ? <Spinner />
                : products.map(product => (
                    <StyledProductItem
                        key={product.id}
                        isChosen={chosenProduct && chosenProduct.id === product.id}
                        onClick={() => handleProductClicked(product)}
                    >
                        <Image className="product-image" src={`../img/${product.thumbnail}`} alt="nike shoes" />
                        <div className="product-name">{product.name}</div>
                        <span className="product-price">
                            $<PriceFormatter price={product.price} />
                        </span>
                    </StyledProductItem>
                ))
            }
        </StyledProductsList>
    );
}

const StyledProductsList = styled.div`
    width: 500px;
    padding: 10px 0;
    padding-top: 50px;
    ${props => props.isSmallScreen && css`
        width: 100%;
        padding-top: 10px;
    `}
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    -webkit-box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);
    box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);

    h2 {
        text-align: center;
        margin: 20px 0;
    }
`;

const StyledProductItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;

    ${props => props.isChosen && css`
        background-color: rgba(0, 0, 0, 0.1);
    `}

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
        flex: 0 80px;
    }

    div {
        margin: 10px;
    }

    @media (max-width: 1400px) {
        .product-price {
            display: none;
        }
    }
`;