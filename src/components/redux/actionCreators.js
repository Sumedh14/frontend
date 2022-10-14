// @ts-nocheck
import axios from "axios";
import * as actionTypes from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchHomeFeaturing = () => (dispatch) => {
  dispatch(featuresLoading(true));
  return fetch(baseUrl + "menu")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((featuredMenu) => dispatch(addFeature(featuredMenu)))
    .catch((error) => dispatch(featuredFailed(error.message)));
};

export const addFeature = (featuredMenu) => ({
  type: actionTypes.ADD_FEATURED,
  payload: featuredMenu,
});

export const featuredFailed = (errMsg) => ({
  type: actionTypes.FEATURED_FAILED,
  payload: errMsg,
});

export const featuresLoading = () => ({
  type: actionTypes.FEATURES_LOADING,
});

export const fetchRegisterdUsers = () => (dispatch) => {
  return fetch(baseUrl + "registeredUsers")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((users) => dispatch(getRegisteredUsers(users)))
    .catch((error) => dispatch(getRegUsersFailed(error.message)));
};

export const getRegisteredUsers = (users) => ({
  type: actionTypes.GET_REGISTERED_USERS,
  payload: users,
});

export const getRegUsersFailed = (errMsg) => ({
  type: actionTypes.GET_REGISTERED_USERS_FAILED,
  payload: errMsg,
});

export const createUser = (newUser) => (dispatch) => {
  return fetch(baseUrl + "registeredUsers", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((user) => dispatch(addUser(user)))
    .catch((error) => {
      console.log("error - ", error);
    });
};

export const addUser = (user) => ({
  type: actionTypes.ADD_USER,
  payload: user,
});

export const hideOkModal = (isHide) => ({
  type: actionTypes.HIDE_OK_MODAL,
  payload: isHide,
});

export const setLoginStatus = (isLoggedIn) => ({
  type: actionTypes.SET_LOGIN_STATUS,
  payload: isLoggedIn,
});

export const setLoginUserData = (loggedInUser) => ({
  type: actionTypes.SET_LOGIN_USER_DATA,
  payload: loggedInUser,
});

export const postFeedback = (
  firstName,
  lastName,
  contactNum,
  email,
  agree,
  contactType,
  message
) => (dispatch) => {
  const newFeedback = {
    firstName: firstName,
    lastName: lastName,
    contactNum: contactNum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message,
  };
  console.log("newFeedback-", newFeedback);
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          console.log("response - ", response);
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((feedback) => dispatch(addFeedback(feedback)))
    .catch((error) => {
      console.log("Post Feedback Error - ", error.message);
      alert("Your Feedback Could Not Be Posted\nError: " + error.message);
    });
};

export const addFeedback = (feedback) => ({
  type: actionTypes.ADD_FEEDBACK,
  payload: feedback,
});

export const fetchFeedback = () => (dispatch) => {
  dispatch(feedbackLoading(true));
  return fetch(baseUrl + "feedback")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((feedback) =>
      alert("Thank you for your feedback!\n" + JSON.stringify(feedback))
    )
    .catch((error) => dispatch(feedbackFailed(error.message)));
};

// Returing a action object

export const feedbackLoading = () => ({
  type: actionTypes.FEEDBACK_LOADING,
});

export const feedbackFailed = (errMsg) => ({
  type: actionTypes.FEEDBACK_FAILED,
  payload: errMsg,
});

export const setSelectedFood = (selectedFood) => ({
  type: actionTypes.SET_SELECTED_FOOD,
  payload: selectedFood,
});

export const addFoodToCart = (foodProduct) => ({
  type: actionTypes.ADD_FOOD_TO_CART,
  payload: foodProduct,
});

export const removeFoodFromCart = (foodId) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: foodId,
});

export const confirmPayOrder = (orderData) => (dispatch) => {
  console.log("orderData - ", orderData);
  return axios({
    method: "POST",
    url: baseUrl + "orders",
    data: JSON.stringify(orderData),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(function (res) {
      console.log("res - ", res);
      if (res.status < 200 || res.status > 302) {
        // This will handle any errors that aren't network related (network related errors are handled automatically)
        return res.json().then(function (body) {
          return Promise.reject(new Error(body.error.message));
        });
      }
      dispatch(addOrder(res.data));
      return res.data;
    })
    .catch(function (error) {
      if (error.response && error.response.data) {
        console.log("POST order error - ", error.message);
        alert("Your ORDER cannot be Posted\nError: " + error.message);
        return error.response.data;
      } else return error;
    });
};

export const addOrder = (order) => ({
  type: actionTypes.ADD_ORDER,
  payload: order,
});
