import React from 'react';
import styled from 'styled-components';

import Panel from '../shared/Panel';
import Image from '../shared/Image';
import Button from '../shared/Button';
import { calculateSum } from '../../util/helpers';

const CartItems = ({ productsInCart }) => {

    console.log(productsInCart);

    return (
        <Panel>
            <h5>These are the items you've added to the cart, click checkout if you are ready</h5>

            <ProductsList>
                {productsInCart.map((product, index) => (
                    <ProductsListItem key={index}>
                        <Image src={`../img/${product.image}`} />
                        <div className="product-name">{product.name} - size {product.size}</div>
                        <div className="product-price">
                            ${product.price.toString().split('.')[0]}
                            {'.'}
                            <span className="price-small">{product.price.toString().split('.')[1]}</span>
                        </div>
                    </ProductsListItem>
                ))}
            </ProductsList>
            <h3>Total: ${calculateSum(productsInCart, 'price')}</h3>
        </Panel>
    );
}

export default CartItems;

const ProductsListItem = styled.div`
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    img {
        flex: 1;
        max-width: 80px;
        height: 100%;
    }

    .product-name {
        flex: 1;
        margin: 0 10px;
    }

    .product-price {
        flex: 1;
        max-width: 50px;
        margin: 0 10px;
    }

    .price-small {
        font-size: 0.7em;
        position: relative;
        bottom: 0.25em;
    }
`;

const ProductsList = styled.div`
    margin: 20px 0;
`;