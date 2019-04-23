import React from 'react';
import styled from 'styled-components';

const Overview = ({ order }) => {

    console.log(order);

    return (
        <OverviewWrapper>
            <h2>Order overview</h2>
            <p>Final look before confirming the order</p>
            <h4>Delivery information</h4>
        </OverviewWrapper>
    )
}

export default Overview;

const OverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;