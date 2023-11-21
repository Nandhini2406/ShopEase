import * as ActionTypes from '../actionTypes';

const initialState = {
    fullName: '',
    lastName: '',
    mobileNumber: '',
    gender: '',
    address: '',
    dateOfBirth: new Date(),
    profileImage: null,
    pdfDocument: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case SET_PROFILE_DETAILS:
    //     return {
    //       ...state,
    //       ...action.payload,
    //     };
      case ActionTypes.fullName:
        return {
          ...state,
          fullName: action.payload,
        };
      case ActionTypes.lastName:
        return {
          ...state,
          lastName: action.payload,
        };
      case ActionTypes.mobileNumber:
        return {
          ...state,
          mobileNumber: action.payload,
        };
      case ActionTypes.gender:
        return {
          ...state,
          gender: action.payload,
        };
      case ActionTypes.address:
        return {
          ...state,
          address: action.payload,
        };
      case ActionTypes.dateOfBirth:
        return {
          ...state,
          dateOfBirth: action.payload,
        };
      case ActionTypes.profileImage:
        return {
          ...state,
          profileImage: action.payload,
        };
      case ActionTypes.pdfDocument:
        return {
          ...state,
          pdfDocument: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  