import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import initialProducts from '../data/products';
import ProductsList from '../components/Products/ProductsList';
import ProductDetails from '../components/Products/ProductDetails';
import useMedia from '../hooks/useMedia';
import Context from '../store/context';

export default props => {
    const { history, location } = props;
    const { state, dispatch } = useContext(Context);
    const isSmallScreen = useMedia('(max-width: 1200px)');
    const { product, products } = state;

    const handleProductClicked = product => {
        dispatch({ type: 'PRODUCT_SELECTED', payload: product });
        history.push(`/models/product?id=${product.id}`);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        if (!products) {
            // Simulate loading the products from the backend
            setTimeout(() => {
                dispatch({ type: 'SET_PRODUCTS', payload: initialProducts });
                const queryParams = queryString.parse(location.search);
                if (queryParams && queryParams.id) {
                    const productFromQuery = initialProducts.find(product => product.id === queryParams.id);
                    dispatch({ type: 'PRODUCT_SELECTED', payload: productFromQuery });
                } else {
                    dispatch({ type: 'PRODUCT_SELECTED', payload: initialProducts[0] });
                }
            }, 1000);
        }
    }

    return (
        <StyledProducts>
            <ProductsList
                products={products}
                chosenProduct={product}
                isSmallScreen={isSmallScreen}
                onClick={handleProductClicked}
            />
            {!isSmallScreen && <ProductDetails
                className="product-details"
                {...props}
            />}
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