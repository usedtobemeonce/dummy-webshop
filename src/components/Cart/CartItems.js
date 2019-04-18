import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Panel from '../shared/Panel';
import Image from '../shared/Image';
import Button from '../shared/Button';
import PriceFormatter from '../shared/PriceFormatter';

const CartItems = ({ productsInCart }) => {

    let content = (
        <EmptyCart>
            <h2>Seems like there's nothing in your cart</h2>
            <FontAwesomeIcon size="10x" icon="shopping-cart" />
        </EmptyCart>
    );
    if (productsInCart && productsInCart.length > 0) {
        content = (
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
                <h2 className="total">
                    Total: ${<PriceFormatter arrayToSum={productsInCart.map(product => product.price)} />}
                </h2>
                <Button>
                    <FontAwesomeIcon style={{ margin: "0 5px" }} icon="chevron-right" /> Proceed to checkout
            </Button>
            </Panel>
        );
    }

    return (content);
}

export default CartItems;

const EmptyCart = styled(Panel)`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10%;

    h2 {
        margin-bottom: 15%;
    }
`;

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

    .total {
        margin-top: 20px;
    }
`;

const ProductsList = styled.div`
    margin: 20px 0;
`;