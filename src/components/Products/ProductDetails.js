import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Image from '../shared/Image';
import Button from '../shared/Button';
import Context from '../../state/context';

export default () => {
    const { state } = useContext(Context);
    const [currentImage, setCurrentImage] = useState(null);
    const [options, setOptions] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const { product } = state;

    useEffect(() => {
        if (product && product.images[0]) {
            setCurrentImage(`../img/${product.images[0]}`);
            setOptions(product.sizes);
        }
    }, [product]);

    const handleImageClicked = image => {
        setCurrentImage(`../img/${image}`);
    }

    const handleSelectedSizeChanged = option => {
        setSelectedOption(option);
    }

    const handleAddToCart = () => {
        const productSelected = {
            id: product.id,
            price: product.price,
            size: selectedOption.value,
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
                    <RowItem><h1>{product.name}</h1></RowItem>
                </Row>
                <Row>
                    <RowItem><p>{product.description}</p></RowItem>
                </Row>
                <Row>
                    <RowOptions>
                        <label>Size</label>
                        {options &&
                            <StyledSelect
                                options={options}
                                placeholder="Select size"
                                value={options && selectedOption ? options.find(option => option.value === selectedOption.value) : ''}
                                onChange={handleSelectedSizeChanged}
                            />
                        }
                        <div className="price">${product.price}</div>
                    </RowOptions>
                </Row>
                <Row>
                    <RowOptions>
                        <Button className="add-to-cart" onClick={handleAddToCart}>Add to cart</Button>
                    </RowOptions>
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

    .price {
        flex: 1;
        text-align: end;
        margin: 20px;
        font-size: 2rem;
        letter-spacing: .1rem;
        color: green;
    }
    
    .add-to-cart {
        flex: 1 0 250px;
        max-width: 400px;
    }

    @media (max-width: 1200px) {
        justify-content: center;

        .price {
            display: block;
        }
    }
`;

const StyledSelect = styled(Select)`
    flex: 1 0 200px;
    max-width: 300px;
`;