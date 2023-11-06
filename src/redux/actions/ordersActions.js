import { PLACE_ORDER, CANCEL_ORDER } from '../actionTypes';

export const placeOrder = (order) => {
  const totalPrice = order.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  const orderWithTotalPrice = {
    ...order,
    totalPrice: totalPrice,
  };
  return {
    type: PLACE_ORDER,
    payload: orderWithTotalPrice,
  };
};

export const cancelOrder = (orderId) => {
  return {
    type: CANCEL_ORDER,
    payload: orderId,
  };
};
