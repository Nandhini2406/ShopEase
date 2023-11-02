import {combineReducers} from 'redux';
import wishlistReducer from './wishlistReducer'; // Import other reducers here

const rootReducer = combineReducers({
  wishlist: wishlistReducer, // Add other reducers here
});

export default rootReducer;
