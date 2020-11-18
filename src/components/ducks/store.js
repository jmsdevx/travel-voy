import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from "./auth/reducers";
import quizReducer from "../ducks/quiz/quizReducer";
import profileReducer from "../ducks/profile/reducers";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true,
});

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  profile: profileReducer,
  quizReducer,
});

const middlewares = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history), logger));

const store = createStore(rootReducer, middlewares);

export default store;
