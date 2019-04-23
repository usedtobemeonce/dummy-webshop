import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Stepper from 'react-stepper-horizontal';

import Panel from '../components/shared/Panel';
import Context from '../store/context';
import Button from '../components/shared/Button';
import Delivery from '../components/Checkout/Delivery';
import Payment from '../components/Checkout/Payment';
import Overview from '../components/Checkout/Overview';
import Completed from '../components/Checkout/Completed';

const steps = [
    { title: 'Delivery' },
    { title: 'Payment' },
    { title: 'Overview' },
    { title: 'Completed' }
];

const Checkout = ({ history }) => {
    const { state, dispatch } = useContext(Context);
    const [activeStep, setActiveStep] = useState(1);

    const handleDeliveryFormSubmit = values => {
        dispatch({ type: 'DELIVERY_INFO_ADDED', payload: values });
        handleNextClicked();
    }

    const handlePaymentFormSubmit = values => {
        dispatch({ type: 'PAYMENT_INFO_ADDED', payload: values });
        handleNextClicked();
    }

    const handleBackClicked = () => {
        activeStep > 0 && setActiveStep(activeStep - 1);
    }

    const handleNextClicked = () => {
        activeStep < 3 && setActiveStep(activeStep + 1);
    }

    let checkoutStep = null;
    switch (activeStep) {
        case 1:
            checkoutStep =
                <Payment
                    payment={state.orderInfo.payment}
                    onSubmit={handlePaymentFormSubmit}
                    onBack={handleBackClicked}
                />;
            break;
        case 2:
            checkoutStep = <Overview order={state.shoppingCart} />;
            break;
        case 3:
            checkoutStep = <Completed />;
            break;
        default:
            checkoutStep =
                <Delivery
                    delivery={state.orderInfo.delivery}
                    onSubmit={handleDeliveryFormSubmit}
                />;
            break;
    }

    return (
        <CheckoutWrapper>
            <Panel>
                <Stepper steps={steps} activeStep={activeStep} />
                {checkoutStep}
            </Panel>
        </CheckoutWrapper>
    );
}

export default Checkout;

const CheckoutWrapper = styled.div`
    padding: 6% 10%;
    
    ${Panel} {
        max-width: 700px;
        margin: auto;
    }

    ${Button} {
        min-width: 100px;
    }

    @media (max-width: 900px) {
        padding: 0;
    }
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;