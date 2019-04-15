export default function reducer(state, { type, payload }) {
    switch (type) {
        case 'PRODUCT_SELECTED':
            return {
                ...state,
                product: payload
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                shoppingCart: state.shoppingCart.concat(payload),
            }
        default: {
            return state;
        }
    }
}