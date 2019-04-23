import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import { Formik, Form } from 'formik';
import InputMask from 'react-input-mask';

const Payment = ({ payment, onBack, onSubmit }) => {
  const [cardNumberError, setCardNumberError] = useState(null);
  const [expirationError, setExpirationError] = useState(null);
  const [cvvError, setCvvError] = useState(null)
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiration: '',
    cvv: ''
  });
  const [cardNumber, setCreditCard] = useState({
    value: '',
    mask: '9999-9999-9999-9999'
  });
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  const handleBackClicked = () => {
    onBack();
  }

  const handleSubmit = () => {
    onSubmit(paymentInfo);
  }

  const handleCreditCardChange = event => {
    const value = event.target.value;
    const newState = {
      mask: '9999-9999-9999-9999',
      value: value
    };

    // autochange to Amex format if starts with 34 or 37
    if (/^3[47]/.test(value)) {
      newState.mask = '9999-999999-99999';
    }

    setCreditCard(newState);
  }

  const handleExpirationChanged = event => {
    const value = event.target.value;
    setExpiration(value);
  }

  const handleCvvChanged = event => {
    const value = event.target.value;
    setCvv(value);
  }

  const validateForm = e => {
    let isValid = true;
    const payment = {
      cardNumber: '',
      expiration: '',
      cvv: '',
    }

    if (cardNumber && cardNumber.value.trim() !== '') {
      payment.cardNumber = cardNumber.value;
      setCardNumberError(null);
    } else {
      setCardNumberError('Card number is required');
      isValid = false;
    }

    if (expiration && expiration.trim() !== '') {
      payment.expiration = expiration;
      setExpirationError(null);
    } else {
      setExpirationError('Card expiration is required');
      isValid = false;
    }

    if (cvv && cvv.trim() !== '') {
      payment.cvv = cvv;
      setCvvError(null);
    } else {
      setCvvError('CVV is required');
      isValid = false;
    }

    if (isValid) {
      setPaymentInfo(payment);
    } else {
      e.preventDefault();
    }
  }

  return (
    <PaymentWrapper>
      <Formik
        initialValues={payment}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleSubmit,
          setFieldValue,
          setFieldTouched
        }) => (
            <Form>
              <h2>Payment information</h2>
              <p>You will first be charged after completing all steps.</p>
              <Row>
                <label htmlFor="cardNumber">Card number</label>
                <InputMask
                  {...cardNumber}
                  mask="9999-9999-9999-9999"
                  placeholder="1234-5678-9012-3456"
                  onChange={handleCreditCardChange}
                  className="ant-input ant-input-lg" />
                {cardNumberError && <InputError>{cardNumberError}</InputError>}
              </Row>
              <Row>
                <Column>
                  <div>
                    <label htmlFor="expriation">Expiration</label>
                    <InputMask
                      mask="99/99"
                      placeholder="MM/YY"
                      onChange={handleExpirationChanged}
                      className="ant-input ant-input-lg" />
                    {expirationError && <InputError>{expirationError}</InputError>}
                  </div>
                  <div>
                    <label htmlFor="cvc">CVV/CVC</label>
                    <InputMask
                      mask="999"
                      placeholder="***"
                      onChange={handleCvvChanged}
                      className="ant-input ant-input-lg" />
                    {cvvError && <InputError>{cvvError}</InputError>}
                  </div>
                </Column>
              </Row>
              <Row>
                <ButtonsRow>
                  <Button size="large" onClick={handleBackClicked}>
                    <Icon type="left" /> Back
                  </Button>
                  <Button onClick={e => validateForm(e)} type="primary" size="large" htmlType="submit">
                    Next <Icon type="right" />
                  </Button>
                </ButtonsRow>
              </Row>
            </Form>
          )}
      </Formik>

    </PaymentWrapper>
  );
}

export default Payment;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Row = styled.div`
  margin: 20px 0;
`;

const Column = styled.div`
  display: flex;

  div:first-child {
    max-width: 200px;
    margin-right: 20px;
  }

  div:nth-child(2) {
    max-width: 200px;
    margin-right: 20px;
  }

  div:nth-child(3) {
    flex: 1;
  }
`;

const InputError = styled.div`
  color: red;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;  
