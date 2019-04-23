import React from 'react';
import styled from 'styled-components';

import { numToTwoDecimals } from '../../util/helpers';

const PriceFormatter = ({ className, price }) => {

    const formatAfterDecimal = val => {
        const formatted = numToTwoDecimals(val);
        return formatted.toString().split('.')[1];
    }

    return (
        <FromattedPrice className={className}>
            {price.toString().split('.')[0]}
            {'.'}
            <SmallPrice className="price-small">{formatAfterDecimal(price)}</SmallPrice>
        </FromattedPrice>
    );
}

export default PriceFormatter;

const FromattedPrice = styled.span`
    letter-spacing: .1em;
    margin-left: 2px;
    margin-right: 2px;
`;

const SmallPrice = styled.span`
    font-size: 0.7em;
    position: relative;
    bottom: 0.25em;
    letter-spacing: .1em;
`;
