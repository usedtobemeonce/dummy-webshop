import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Image from '../shared/Image';

export default props => {
    const [currentImage, setCurrentImage] = useState(null);
    const { product, className } = props;

    useEffect(() => {
        if (product && product.images[0]) {
            setCurrentImage(`../img/${product.images[0]}`);
        }
    }, [product])

    const handleImageClicked = image => {
        setCurrentImage(`../img/${image}`);
    }

    let content = null;
    if (product) {
        content = (
            <Container className={className}>
                <Row>
                    <ProductImages>
                        {product.images.map((image, index) => (
                            <Image key={index} src={`../img/${image}`} onClick={() => handleImageClicked(image)} />
                        ))}
                    </ProductImages>
                    <CurrentImage>
                        <Image src={currentImage} />
                    </CurrentImage>
                </Row>
                <Row>
                    <RowItem><h1>{product.name}</h1></RowItem>
                </Row>
                <Row>
                    <RowItem><p>{product.description}</p></RowItem>
                </Row>
            </Container>
        );
    }

    return (content);
}

const Container = styled.div`
    margin-top: 5%;
`;

const Row = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

const RowItem = styled.div`
    flex: 1 1 auto;
    max-width: 1200px;

    h1 {
        font-size: calc(16px + 1vw);
        text-transform: uppercase;
        font-size: calc(16px + 1.5vw);
        font-weight: 700;
        text-transform: uppercase;
    }
    p {
        font-size: .8em;
    }
`;

const ProductImages = styled.div`
    flex: 1 0 200px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        margin: 20px 10px;
        cursor: pointer;
    }
`;

const CurrentImage = styled.div`
    flex: 1 0 300px;
    max-width: 1000px;
    margin-left: 30px;

    img {
        cursor: pointer;
    }
`;