import { POLL_ERROR, POLL_GET } from "../../../actions";
import updatePollObject from "../../../util/updatePollObject";
import { pollReducerType } from "./pollReducerType";

const initialPollState: pollReducerType = {
  poll: undefined,
  errors: undefined,
  loading: false,
};

export const pollReducer = (
  state = initialPollState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case POLL_GET:
      return updatePollObject(state, action.payload);
    case POLL_ERROR:
      return updatePollObject(state, action.payload);
    default:
      return state;
  }
};
