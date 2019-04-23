import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import * as Yup from "yup";
import { Formik } from 'formik';

import CustomInput from '../shared/CustomInput';

const deliverySchema = Yup.object({
  name: Yup.string().required('Name is required.'),
  street: Yup.string().required('Streetname and number are required'),
  zipcode: Yup.string().required().length(5),
  city: Yup.string().required('City is requried.'),
  email: Yup.string().email('Email must be a valid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
});

const Delivery = ({ delivery, onSubmit }) => {

  const handleSubmit = values => {
    onSubmit(values);
  }

  return (
    <DeliveryWrapper>
      <Formik
        initialValues={delivery}
        validationSchema={deliverySchema}
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
            <form onSubmit={handleSubmit}>
              <h2>Delivery information</h2>
              <p>Please provide your name and address, so we can process your order.</p>
              <Row>
                <label>Name</label>
                <CustomInput
                  placeholder="Your name"
                  name="name"
                  onChange={(name, e) => setFieldValue(name, e)}
                  onBlur={(name, e) => {
                    setFieldValue(name, e);
                    setFieldTouched(name, true, false);
                  }}
                  value={values.name}
                  errors={errors.name}
                  touched={touched.name}
                />
              </Row>
              <Row>
                <label>Streetname and number</label>
                <CustomInput
                  placeholder="Streetname & number"
                  name="street"
                  onChange={(name, e) => setFieldValue(name, e)}
                  onBlur={(name, e) => {
                    setFieldValue(name, e);
                    setFieldTouched(name, true, false);
                  }}
                  value={values.street}
                  errors={errors.street}
                  touched={touched.street}
                />
              </Row>
              <Row>
                <Column>
                  <div>
                    <label>Zipcode</label>
                    <CustomInput
                      placeholder="Zipcode"
                      name="zipcode"
                      onChange={(name, e) => setFieldValue(name, e)}
                      onBlur={(name, e) => {
                        setFieldValue(name, e);
                        setFieldTouched(name, true, false);
                      }}
                      value={values.zipcode}
                      errors={errors.zipcode}
                      touched={touched.zipcode}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <CustomInput
                      placeholder="City"
                      name="city"
                      onChange={(name, e) => setFieldValue(name, e)}
                      onBlur={(name, e) => {
                        setFieldValue(name, e);
                        setFieldTouched(name, true, false);
                      }}
                      value={values.city}
                      errors={errors.city}
                      touched={touched.city}
                    />
                  </div>
                </Column>
              </Row>
              <Row>
                <label>Email</label>
                <CustomInput
                  placeholder="Email"
                  name="email"
                  onChange={(name, e) => setFieldValue(name, e)}
                  onBlur={(name, e) => {
                    setFieldValue(name, e);
                    setFieldTouched(name, true, false);
                  }}
                  value={values.email}
                  errors={errors.email}
                  touched={touched.email}
                />
              </Row>
              <Row>
                <label>Phone</label>
                <CustomInput
                  placeholder="Phone"
                  name="phone"
                  onChange={(name, e) => setFieldValue(name, e)}
                  onBlur={(name, e) => {
                    setFieldValue(name, e);
                    setFieldTouched(name, true, false);
                  }}
                  value={values.phone}
                  errors={errors.phone}
                  touched={touched.phone}
                />
              </Row>
              <Row>
                <Button type="primary" size="large" htmlType="submit">
                  Next <Icon type="right" />
                </Button>
              </Row>
            </form>
          )}
      </Formik>
    </DeliveryWrapper>
  );
}

export default Delivery

const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Row = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
  }
`;

const Column = styled.div`
  display: flex;

  div:first-child {
    max-width: 200px;
    margin-right: 20px;
  }

  div:nth-child(2) {
    flex: 1;
  }
`;


