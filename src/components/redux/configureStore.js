import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { MenuReducer } from './menuReducer';
import { UserReducer } from './userReducer';
import { initialFeedback } from './initialFeedbackForm';
import { FeedbackReducer } from './feedbackReducer';
import { OrderReducer } from './orderReducer';

// WITHOUT THUNK --

// export const ConfigureStore = () => {
//   const store = createStore(combineReducers({
//     dishes: DishesReducer,
//     comments: CommentsReducer,
//     promotions: PromotionsReducer,
//     leaders: LeadersReducer,
//   }))
//   return store;
// }

// WITH THUNK --

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  menu: MenuReducer,
  userInfo: UserReducer,
  feedbacks: FeedbackReducer,
  orders: OrderReducer,
    ...createForms({
      feedback: initialFeedback
    })
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
    
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export const ConfigureStore = () => {
  const store = createStore(persistedReducer, persistedState, applyMiddleware(thunk, logger)
)

// store.subscribe(() => saveToLocalStorage(store.getState()));
  store.subscribe(() => {
    saveToLocalStorage(store.getState())
  })
  return store;
}
