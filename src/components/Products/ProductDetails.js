import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '../shared/Image';
import Button from '../shared/Button';
import Tag from '../shared/Tag';
import Panel from '../shared/Panel';
import Context from '../../state/context';

export default () => {
    const { state } = useContext(Context);
    const [currentImage, setCurrentImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isError, setIsError] = useState(false);
    const { product } = state;

    useEffect(() => {
        if (product && product.images[0]) {
            setCurrentImage(`../img/${product.images[0]}`);
        }
    }, [product]);

    const handleImageClicked = image => {
        setCurrentImage(`../img/${image}`);
    }

    const handleSizeSelected = size => {
        setIsError(false);
        setSelectedSize(size);
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            setIsError(true);
            return;
        }
        const productSelected = {
            id: product.id,
            price: product.price,
            size: selectedSize,
        };
        console.log('add to cart clicked', productSelected);
    }

    let content = null;
    if (product) {
        content = (
            <Container>
                <ProductImagesRow>
                    <ProductImages>
                        {product.images.map((image, index) => (
                            <Image key={index} src={`../img/${image}`} onClick={() => handleImageClicked(image)} />
                        ))}
                    </ProductImages>
                    <CurrentImage>
                        <Image src={currentImage} />
                    </CurrentImage>
                </ProductImagesRow>
                <Row>
                    <RowItem>
                        <Panel>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <Row>
                                <RowOptions>
                                    <label>Size</label>
                                    <div>
                                        {product.sizes.map(size => (
                                            <Tag
                                                key={size.value}
                                                isSelected={selectedSize === size.value}
                                                onClick={() => handleSizeSelected(size.value)}
                                            >
                                                {size.label}
                                            </Tag>
                                        ))}
                                    </div>
                                    {isError && <span className="error">Please select a size!</span>}
                                </RowOptions>
                                <RowOptions>
                                    <div className="price">
                                        ${product.price.toString().split('.')[0]}
                                        {'.'}
                                        <span className="price-small">{product.price.toString().split('.')[1]}</span>
                                    </div>
                                </RowOptions>
                            </Row>
                            <Row>
                                <RowOptions>
                                    <Button className="add-to-cart" onClick={handleAddToCart}>
                                        <FontAwesomeIcon icon="shopping-cart" /> Add to cart
                                    </Button>
                                </RowOptions>
                            </Row>
                        </Panel>
                    </RowItem>
                </Row>
            </Container>
        );
    }

    return (content);
}

const Container = styled.div`
    margin: auto;
    margin-top: 5%;
`;


/* Image gallery */

const ProductImagesRow = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
        flex-direction: column-reverse;
    }
`;

const ProductImages = styled.div`
    flex: 1 0 100px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        max-width: 100px;
        height: 100%;
        margin: 20px 10px;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        flex-direction: row;
        justify-content: flex-start;
        max-width: 100%;
        flex: 1;
        overflow-x: auto;
    }
`;

const CurrentImage = styled.div`
    flex: 1 0 250px;
    max-width: 1000px;
    margin-left: 30px;

    img {
        cursor: pointer;
        display: block;
        margin: auto;
    }

    @media (max-width: 1200px) {
        margin-left: 0;
    }

    @media (max-width: 600px) {
        img {
            width: 100%;
        }
    }
`;



/* Product information and CTA */

const Row = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
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

const RowOptions = styled.div`
    flex: 1;
    max-width: 1200px;
    display: flex;
    align-items: center;

    label {
        margin-right: 20px;
        font-size: 1.2em;
        flex: 0 0 50px;
    }

    .error {
        color: red;
        font-weight: 700;
    }

    .price {
        flex: 1;
        text-align: end;
        margin: 20px;
        font-size: 2rem;
        letter-spacing: .1rem;
    }

    .price-small {
        font-size: 0.7em;
        position: relative;
        bottom: 0.25em;
    }
    
    .add-to-cart {
        flex: 1 0 250px;
        max-width: 400px;
    }

    @media (max-width: 1200px) {
        display: block;

        .price {
            display: block;
        }

        .add-to-cart {
            min-width: 300px;
        }
    }
`;