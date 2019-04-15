import React from 'react';
import styled, { css } from 'styled-components';

import CustomLink from './shared/CustomLink';

const InfoBar = ({ location }) => {
    let showBackToModelsLink = false;

    if (location.pathname !== '/models' && location.pathname !== '/') {
        showBackToModelsLink = true;
    } else {
        showBackToModelsLink = false;
    }

    return (
        <StyledInfoBar justifyEnd={!showBackToModelsLink}>
            {showBackToModelsLink && <CustomLink to="/models">Back to products</CustomLink>}
            <CustomLink to="/shopping-cart">Shopping cart</CustomLink>
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
`;

