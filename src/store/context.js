import { createContext } from 'react';

const initialState = {
    product: null,
    products: null,
    shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || [],
    orderInfo: {
        delivery: {
            name: '',
            street: '',
            zipcode: '',
            city: '',
            email: '',
            phone: '',
        },
        payment: {
            cardNumber: '',
            expiration: '',
            cvv: '',
        }
    }
}

const Context = createContext(initialState);

export default Context;