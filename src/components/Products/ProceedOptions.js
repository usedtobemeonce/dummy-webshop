import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomLink from '../shared/CustomLink';
import Button from '../shared/Button';
import Panel from '../shared/Panel';

const ProceedOptions = ({ className, history, onContinueShoppingClick }) => {

    const handleContinueShopping = () => {
        onContinueShoppingClick();
    }

    const handleProceedToCheckout = () => {
        history.push('/shopping-cart');
    }

    return (
        <Panel className={className}>
            <h2>The product was added successfully to the cart.</h2>
            <p>Would you like to proceed to checkout?</p>
            <StyledFontAwesomeIcon
                icon="thumbs-up"
                size="5x"
                color="#707070" />
            <StyledProceedOptions>
                <CustomLink
                    to="/models"
                    onClick={handleContinueShopping}
                >
                    Continue shopping
                </CustomLink>
                <Button onClick={handleProceedToCheckout}>Proceed to checkout</Button>
            </StyledProceedOptions>
        </Panel>
    );
}

export default ProceedOptions;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 100% !important;
    margin: 40px 0;
`;

const StyledProceedOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;