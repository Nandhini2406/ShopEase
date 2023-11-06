import {PLACE_ORDER, CANCEL_ORDER} from '../actionTypes';

const initialState = {
  orders: [],
  currentOrderId: 1,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      const newOrder = {
        ...action.payload,
        id: state.currentOrderId, // Assign the current order ID to the new order
      };
      return {
        ...state,
        orders: [...state.orders, newOrder],
        currentOrderId: state.currentOrderId + 1, // Increment the order ID
      };
    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
        currentOrderId: 1,
      };
    default:
      return state;
  }
};

export default orderReducer;
