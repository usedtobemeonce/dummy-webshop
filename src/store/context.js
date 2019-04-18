import { createContext } from 'react';

const initialState = {
    product: null,
    products: null,
    shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || [],
}

const Context = createContext(initialState);

export default Context;