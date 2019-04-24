import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';

const Overview = ({ order, delivery, onBack, onConfirm }) => {

    const handleBackClicked = () => {
        onBack();
    }

    const handleConfirmClicked = () => {
        onConfirm();
    }

    return (
        <OverviewWrapper>
            <h1>Order overview</h1>
            <h4>Final look before confirming the order. Items to be purchased are:</h4>
            <div className="order-section">
                {order.map(item => (
                    <div key={item.id}>
                        {item.name} - {item.size}
                    </div>
                ))}
            </div>
            <h4>Delivery information</h4>
            <span>The order is going to be shipped to the following person and address:</span>
            <div className="order-section">
                <div>{delivery.name}</div>
                <div>{delivery.street}</div>
                <div>{delivery.zipcode}{' '}{delivery.city}</div>
            </div>
            <br />
            <span>Contact details</span>
            <div className="order-section">
                <div>Name: {delivery.name}</div>
                <div>Email: {delivery.email}</div>
                <div>Phone: {delivery.phone}</div>
            </div>
            <ButtonsRow>
                <Button size="large" onClick={handleBackClicked}>
                    <Icon type="left" /> Back
                  </Button>
                <Button onClick={handleConfirmClicked} type="primary" size="large" htmlType="submit">
                    Confirm <Icon type="right" />
                </Button>
            </ButtonsRow>
        </OverviewWrapper>
    )
}

export default Overview;

const OverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .order-section {
        margin: 10px 0;
    }
`;

const ButtonsRow = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;  