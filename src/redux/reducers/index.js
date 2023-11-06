// rootReducer.js
import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer';
import orderReducer from './ordersReducer';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;

