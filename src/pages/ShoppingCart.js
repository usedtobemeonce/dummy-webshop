import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import CartItems from '../components/Cart/CartItems';
import Context from '../store/context';

const ShoppingCart = props => {
    const { state } = useContext(Context);
    const [productsInCart, setProductsInCart] = useState([]);

    useEffect(() => {
        setProductsInCart(state.shoppingCart)
    }, [state.shoppingCart]);

    return (
        <StyledShoppingCart>
            <h1>Products in cart</h1>
            <CartItems productsInCart={productsInCart} />
        </StyledShoppingCart>
    );
}

export default ShoppingCart;

const StyledShoppingCart = styled.div`
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;