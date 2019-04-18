import React from 'react';
import styled from 'styled-components';

import { calculateSum, numToTwoDecimals } from '../../util/helpers';

const PriceFormatter = ({ className, price, arrayToSum }) => {
    let priceToFormat = price;

    if (arrayToSum) {
        priceToFormat = calculateSum(arrayToSum);
    }

    const formatAfterDecimal = val => {
        const formatted = numToTwoDecimals(val);
        return formatted.toString().split('.')[1];
    }

    return (
        <FromattedPrice className={className}>
            {priceToFormat.toString().split('.')[0]}
            {'.'}
            <SmallPrice className="price-small">{formatAfterDecimal(priceToFormat)}</SmallPrice>
        </FromattedPrice>
    );
}

export default PriceFormatter;

const FromattedPrice = styled.span`
    letter-spacing: .1em;
`;

const SmallPrice = styled.span`
    font-size: 0.7em;
    position: relative;
    bottom: 0.25em;
    letter-spacing: .1em;
`;
