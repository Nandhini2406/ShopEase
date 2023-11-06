import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from '../actionTypes';

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const increaseQuantity = productId => ({
  type: INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = productId => ({
  type: DECREASE_QUANTITY,
  payload: productId,
});

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
