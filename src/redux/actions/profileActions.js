// profileActions.js
import * as ActionTypes from '../actionTypes';

// export const setProfileDetails = details => ({
//   type: SET_PROFILE_DETAILS,
//   payload: details,
// });

export const setFullName = fullName => ({
  type: ActionTypes.fullName,
  payload: fullName,
});

export const setLastName = lastName => ({
  type: ActionTypes.lastName,
  payload: lastName,
});

export const setMobileNumber = mobileNumber => ({
  type: ActionTypes.mobileNumber,
  payload: mobileNumber,
});

export const setGender = gender => ({
  type: ActionTypes.gender,
  payload: gender,
});

export const setAddress = address => ({
  type: ActionTypes.address,
  payload: address,
});

export const setDateOfBirth = dateOfBirth => ({
  type: ActionTypes.dateOfBirth,
  payload: dateOfBirth,
});

export const setProfileImage = profileImage => ({
  type: ActionTypes.profileImage,
  payload: profileImage,
});

export const setPdfDocument = pdfDocument => ({
  type: ActionTypes.pdfDocument,
  payload: pdfDocument,
});
