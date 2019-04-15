import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import initialProducts from '../data/products';
import ProductsList from '../components/Products/ProductsList';
import ProductDetails from '../components/Products/ProductDetails';

export default props => {

    const [products, setProducts] = useState(null);
    const [chosenProduct, setChosenProduct] = useState(null);

    const handleProductClicked = product => {
        setChosenProduct(product);
        console.log(product);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        // Simulate loading the products from the backend
        setTimeout(() => {
            setProducts(initialProducts);
            setChosenProduct(initialProducts[0]);
        }, 1000);
    }

    return (
        <StyledProducts>
            <ProductsList
                products={products}
                chosenProduct={chosenProduct}
                onClick={handleProductClicked}
            />
            <ProductDetails
                className="product-details"
                product={chosenProduct}
            />
        </StyledProducts>
    );
}

const StyledProducts = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .product-details {
        flex: 1;
    }
`;