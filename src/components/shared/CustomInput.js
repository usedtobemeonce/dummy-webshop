import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const CustomInput = ({ className, placeholder, name, value, errors, touched, onChange, onBlur }) => {

    const handleChange = e => {
        onChange(e.target.name, e.target.value);
    }

    const handleBlur = e => {
        onBlur(e.target.name, e.target.value);
    }

    return (
        <>
            <Input
                className={className}
                placeholder={placeholder || ''}
                size="large"
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                error={errors ? 1 : 0 && touched ? 1 : 0}
            />
            {
                errors &&
                touched &&
                <FormInputError>{errors}</FormInputError>
            }
        </>
    )
}

export default CustomInput;

const FormInputError = styled.div`
    color: red;
`;
