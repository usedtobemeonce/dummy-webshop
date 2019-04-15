import React from 'react';
import styled, { css } from 'styled-components';

import Checkmark from '../../assets/images/checkmark.png';
import Image from '../shared/Image';
import Spinner from '../shared/Spinner';

export default props => {

    const { products, chosenProduct } = props;

    const handleProductClicked = product => {
        props.onClick(product);
    }

    return (
        <StyledProductsList>
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
                        <div className="product-price">${product.price}</div>
                        <div className="product-is-chosen">
                            {chosenProduct && chosenProduct.id === product.id
                                ? <Image src={Checkmark} />
                                : null
                            }
                        </div>
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
        flex: 0 60px;
    }

    .product-is-chosen {
        flex-basis: 30px;

        img {
            max-height: 50px;
            max-width: 40px;
        }
    }

    div {
        margin: 10px;
    }
`;