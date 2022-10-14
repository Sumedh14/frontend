import * as actionTypes from "./actionTypes";

export const UserReducer = (
  state = {
    isLoading: true,
    errMsg: null,
    registeredUser: [],
    isUserAdded: false,
    loggedInUser: {},
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_REGISTERED_USERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        isUserAdded: false,
        registeredUser: action.payload,
      };

    case actionTypes.GET_REGISTERED_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        isUserAdded: false,
        registeredUser: [],
      };

    case actionTypes.ADD_USER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        isUserAdded: true,
        registeredUser: state.registeredUser.push(action.payload),
      };

    case actionTypes.HIDE_OK_MODAL:
      return {
        ...state,
        isUserAdded: false,
      };

    case actionTypes.SET_LOGIN_STATUS:
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };

    case actionTypes.SET_LOGIN_USER_DATA:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};
