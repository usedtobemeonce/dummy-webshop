import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';

import CustomLink from './shared/CustomLink';
import Context from '../store/context';

const InfoBar = ({ location }) => {
    const [shoppingCartCount, setShoppingCartCount] = useState(0);
    const { state } = useContext(Context);
    let showBackToModelsLink = false;

    useEffect(() => {
        if (state.shoppingCart) {
            setShoppingCartCount(state.shoppingCart.length);
        }
    }, [state.shoppingCart]);

    if (location.pathname !== '/models' && location.pathname !== '/') {
        showBackToModelsLink = true;
    } else {
        showBackToModelsLink = false;
    }

    return (
        <StyledInfoBar justifyEnd={!showBackToModelsLink}>
            {showBackToModelsLink && <CustomLink to="/models">Back to products</CustomLink>}
            <CustomLink to="/shopping-cart">
                Shopping cart
                {shoppingCartCount > 0 && <span className="cart-count"> ({shoppingCartCount})</span>}
            </CustomLink>
        </StyledInfoBar>
    );
}

export default InfoBar;

const StyledInfoBar = styled.div`
    height: 100px;
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${props => props.justifyEnd && css`
        justify-content: flex-end;
    `}
    padding: 10px 20px;

    .cart-count {
        font-weight: 700;
        font-size: 1.3rem;
    }
`;

