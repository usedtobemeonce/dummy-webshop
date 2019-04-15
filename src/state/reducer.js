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
        default: {
            return state;
        }
    }
}