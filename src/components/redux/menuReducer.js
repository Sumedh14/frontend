import * as actionTypes from './actionTypes';

export const MenuReducer = (state = {
  isLoading: true,
  errMsg: null,
  featuredMenu: []
}, action) => {
    switch (action.type) {
      case actionTypes.ADD_FEATURED:
        return {
          ...state,
          isLoading: false,
          errMsg: null,
          featuredMenu: action.payload,
        }

      case actionTypes.FEATURED_FAILED:
        return {
          ...state,
          isLoading: false,
          errMsg: action.payload,
          featuredMenu: [],
        }
      default:
        return state;
    }
}