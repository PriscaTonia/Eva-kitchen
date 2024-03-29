import { ADD_TO_CART, INCREMENT, DECREMENT, ITEMS_IN_CART, CLEAR_CART} from "../constants";
const initialState = {cartItem: [], cartCount:0,}
export const cartReducer = (state= initialState, action)=>{ 
    switch (action.type) {
        case ADD_TO_CART:
            return{...state, cartItem: action.payload};
        case ITEMS_IN_CART:
            return{...state, cartCount:action.payload};
        case INCREMENT:
            return {...state, cartItem: action.payload}
        case DECREMENT:
            return {...state, cartItem: action.payload}        
        case CLEAR_CART:
            return {cartItem: [], cartCount:0}        
        default:
            return state;
    }
}              