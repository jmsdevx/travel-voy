import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "../ducks/auth/authReducer";
import quizReducer from "../ducks/quiz/quizReducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true,
});

const rootReducer = combineReducers({ authReducer, quizReducer });

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middlewares);

export default store;
