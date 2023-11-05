import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Payload in cartReducer:', action.payload);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
