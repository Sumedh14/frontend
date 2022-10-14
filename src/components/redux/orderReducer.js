import * as actionTypes from './actionTypes';

export const OrderReducer = (state = {
  isLoading: true,
  errMsg: null,
  orders: [],
  selectedFood: {},
  foodList: [],
}, action) => {
    switch (action.type) {
      case actionTypes.SET_SELECTED_FOOD:
      console.log('new payload - ', action.payload);  
      return {
          ...state,
          isLoading: false,
          errMsg: null,
          selectedFood: action.payload,
        }

      case actionTypes.ADD_ORDER:
        return {
          ...state,
          isLoading: false,
          errMsg: null,
          orders: action.payload
        }

      case actionTypes.ADD_FOOD_TO_CART:
        return {
          ...state,
          foodList: [...state.foodList, action.payload]
        }

      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          foodList: state.foodList.filter(obj => obj.id !== action.payload)
        }
      default:
        return state;
    }
}