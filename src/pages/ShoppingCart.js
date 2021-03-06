import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Context from '../store/context';
import Panel from '../components/shared/Panel';
import Image from '../components/shared/Image';
import Button from '../components/shared/Button';
import PriceFormatter from '../components/shared/PriceFormatter';
import { calculateVatFromGross, calculateSum, numToTwoDecimals } from '../util/helpers';

const ShoppingCart = ({ history }) => {
    const { state, dispatch } = useContext(Context);
    const [productsInCart, setProductsInCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [vatAmount, setVatAmount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setProductsInCart(state.shoppingCart);
    }, [state.shoppingCart]);

    useEffect(() => {
        if (productsInCart.length > 0) {
            const productsPrices = productsInCart.map(product => product.price);
            if (productsPrices && productsPrices.length > 0) {
                const totalAmount = calculateSum(productsPrices);
                setTotal(totalAmount);
                setVatAmount(numToTwoDecimals(calculateVatFromGross(totalAmount)));
            }
        }
    }, [productsInCart]);

    const handleBrowseMoreClicked = () => {
        history.push('/models');
    }

    const handleProductSelected = id => {
        const isSelected = selectedProduct !== id ? id : null;
        setSelectedProduct(isSelected);
    }

    const handleRemoveProductClicked = index => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: index });
    }

    const handleCheckout = () => {
        history.push('/shopping-cart/checkout');
    }

    let content = (
        <EmptyCart>
            <h2>Seems like there's nothing in your cart</h2>
            <FontAwesomeIcon style={{ margin: "5% 0" }} size="10x" icon="shopping-cart" />
            <Button onClick={handleBrowseMoreClicked} type="primary" size="large">Browse products</Button>
        </EmptyCart>
    );
    if (productsInCart && productsInCart.length > 0) {
        content = (
            <Panel>
                <h1>Items in cart [{productsInCart.length}]</h1>
                <h5>These are the items you've added to the cart, click checkout if you are ready</h5>

                <ProductsList>
                    {productsInCart.map((product, index) => (
                        <ProductsListItem
                            key={index}
                            isSelected={selectedProduct === index}
                            onClick={() => handleProductSelected(index)}
                        >
                            <Image src={`../img/${product.image}`} />
                            <div className="product-name">{product.name} - size {product.size}</div>
                            <span className="product-price">$<PriceFormatter price={product.price} /></span>
                            {selectedProduct === index &&
                                <Button
                                    className="product-remove"
                                    type="danger"
                                    onClick={() => handleRemoveProductClicked(index)}
                                >
                                    <FontAwesomeIcon style={{ margin: "0 5px" }} icon="trash" />
                                </Button>
                            }
                        </ProductsListItem>
                    ))}
                </ProductsList>
                <hr />
                <h2 className="total">
                    Total: $<PriceFormatter price={total} />
                </h2>
                <h5>VAT (20%): $<PriceFormatter price={vatAmount} /></h5>
                <Button type="primary" size="large" onClick={handleCheckout}>
                    <FontAwesomeIcon style={{ margin: "0 5px" }} icon="chevron-right" /> Checkout
                </Button>
            </Panel>
        );
    }

    return (
        <ShoppingCartWrapper>
            {content}
        </ShoppingCartWrapper>
    );
}

export default ShoppingCart;


const ShoppingCartWrapper = styled.div`
    padding: 6% 10%;

    .total {
        margin-top: 20px;
        margin-bottom: 5px;
    }

    @media (max-width: 900px) {
        padding: 0;
    }
`;

const EmptyCart = styled(Panel)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10%;
`;

const ProductsList = styled.div`
    margin: 20px 0;
`;

const ProductsListItem = styled.div`
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 15px 10px;
    cursor: pointer;

    ${props => props.isSelected && css`
        background-color: rgba(0, 0, 0, 0.3);
    `}

    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

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
        flex: 1 0 70px;
        max-width: 100px;
        margin: 0;
    }

    .product-remove {
        max-width: 55px;
        margin: 0;
    }
`;