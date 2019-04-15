import { createContext } from 'react';

const Context = createContext({
    product: null,
    products: null,
    shoppingCart: [],
});

export default Context;