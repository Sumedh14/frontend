import * as actionTypes from './actionTypes';

export const FeedbackReducer = (state = {
  isLoading: true,
  errMsg: null,
  feedbacks: [],
  isFeedbackAdded: false,
}, action) => {
  switch (action.type) {
    case actionTypes.ADD_FEEDBACK:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        feedbacks: action.payload,
        isFeedbackAdded: true,
      }
      
    case actionTypes.FEEDBACK_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        feedbacks: [],
        isFeedbackAdded: false,
      }

    case actionTypes.FEEDBACK_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        feedbacks: [],
        isFeedbackAdded: false,
      }
 
    default:
      return state;
  }
}