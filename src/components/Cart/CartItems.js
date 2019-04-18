import React from 'react';
import styled from 'styled-components';

import Panel from '../shared/Panel';
import Image from '../shared/Image';
import Button from '../shared/Button';
import PriceFormatter from '../shared/PriceFormatter';

const CartItems = ({ productsInCart }) => {
    return (
        <Panel>
            <h5>These are the items you've added to the cart, click checkout if you are ready</h5>

            <ProductsList>
                {productsInCart.map((product, index) => (
                    <ProductsListItem key={index}>
                        <Image src={`../img/${product.image}`} />
                        <div className="product-name">{product.name} - size {product.size}</div>
                        $<PriceFormatter className="prroduct-prie" price={product.price} />
                    </ProductsListItem>
                ))}
            </ProductsList>
            <hr />
            <h2>Total: ${<PriceFormatter arrayToSum={productsInCart.map(product => product.price)} />}</h2>
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
`;

const ProductsList = styled.div`
    margin: 20px 0;
`;