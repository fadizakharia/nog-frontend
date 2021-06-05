import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducers/authReducer/authReducer";
import thunk from "redux-thunk";
import { pollReducer } from "./auth/reducers/pollReducer/pollReducer";
import { authReducerState } from "./auth/reducers/authReducer/authReducerType";
import { pollReducerType } from "./auth/reducers/pollReducer/pollReducerType";
const rootReducer = combineReducers({ auth: authReducer, poll: pollReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
export interface applicationState {
  auth: authReducerState;
  poll: pollReducerType;
}
