import { authReducerState } from "../auth/reducers/authReducer/authReducerType";

const updateObject = (oldState: authReducerState, state: authReducerState) => {
  return {
    ...oldState,
    ...state,
  };
};
export default updateObject;
