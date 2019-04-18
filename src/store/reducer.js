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
        case 'REMOVE_FROM_CART':
            const shoppingCart = [...state.shoppingCart];
            shoppingCart.splice(payload, 1);
            return {
                ...state,
                shoppingCart: [...shoppingCart],
            }
        default: {
            return state;
        }
    }
}