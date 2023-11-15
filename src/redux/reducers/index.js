// rootReducer.js
import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer';
import orderReducer from './ordersReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  order: orderReducer,
  profileData: profileReducer,
});

export default rootReducer;

