import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actionTypes";

const initialState = [];

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      console.log('Payload in wishlistReducer:', action.payload);
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default wishlistReducer;
