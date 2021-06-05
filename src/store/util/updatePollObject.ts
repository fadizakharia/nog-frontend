import { pollReducerType } from "../auth/reducers/pollReducer/pollReducerType";

const updatePollObject = (
  oldState: pollReducerType,
  state: pollReducerType
) => {
  return { ...oldState, ...state };
};
export default updatePollObject;
