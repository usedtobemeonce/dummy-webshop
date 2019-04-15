import React from 'react';
import styled, { css } from 'styled-components';

export default props => {

    const { product, className } = props;

    let content = null;
    if (product) {
        content = (
            <Container className={className}>
                <div className="product-images">images</div>
                <div className="current-product-image">current image</div>
            </Container>
        );
    }

    return (content);
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;