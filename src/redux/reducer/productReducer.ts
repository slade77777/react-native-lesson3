import {GET_PRODUCTS, SET_PRODUCTS_LOADING} from "../action/productionAction";

const initialValue = {
    isLoading: false,
    products: [],
};

export default function productReducer(state = initialValue, action: any) {
    switch (action.type) {
        case SET_PRODUCTS_LOADING:
            return {
                products: [],
                isLoading: true
            }
        case GET_PRODUCTS:
            return {
                products: action.data,
                isLoading: false
            }
        default:
            return state;
    }
}
