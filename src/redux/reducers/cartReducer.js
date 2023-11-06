import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from '../actionTypes';

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
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
