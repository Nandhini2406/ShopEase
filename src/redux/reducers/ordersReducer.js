import {PLACE_ORDER, CANCEL_ORDER} from '../actionTypes';

const initialState = {
  orders: [],
  currentOrderId: 1,
};

const getNextOrderId = (orders, currentOrderId) => {
  const maxOrderId = orders.reduce((max, order) => (order.id > max ? order.id : max), currentOrderId - 1);
  return maxOrderId + 1;
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      const newOrder = {
        ...action.payload,
        id: getNextOrderId(state.orders, state.currentOrderId),
      };
      return {
        ...state,
        orders: [...state.orders, newOrder],
    
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
