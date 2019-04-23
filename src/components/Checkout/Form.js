import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { compose, withState, withHandlers } from 'recompose';

const enhance = compose(
    withState('step', 'setStep', 1),
    withHandlers({
        nextStep: ({ setStep, step }) =>
            () => setStep(step + 1)
    }),
    Formik({
        mapPropsToValues: ({ form: {
            phoneNumber,
            authCode
        } }) => ({
            phoneNumber,
            authCode
        }),
        handleSubmit(
            values,
            { props, setErrors, setSubmitting }
        ) {
            alert(JSON.stringify(values));
        }
    })
);

const Step1 = ({ nextStep, handleChange, values }) => (
    <div>
        <input
            type="tel"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange} />
        <button onClick={nextStep}>Next</button>
    </div>
);

const Step2 = ({ handleChange, values }) => (
    <div>
        <input
            type="text"
            name="authCode"
            value={values.authCode}
            maxLength={5}
            onChange={handleChange} />
        <button type="submit">Submit</button>
    </div>
)

const Form = ({
    handleSubmit,
    step,
    nextStep,
    ...props
}) => (
        <form onSubmit={handleSubmit}>
            {{
                1: <Step1 nextStep={nextStep} {...props} />,
                2: <Step2 {...props} />
            }[step] || <div />}
        </form>
    )

export default enhance(Form);