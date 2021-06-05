import { AuthAction, authReducerState } from "./authReducerType";
import * as actions from "../../../actions";
import updateObject from "../../../util/updateObject";
export const initialState: authReducerState = {
  isLoggedIn: undefined,
  loading: false,
  errors: null,
  characterName: null,
  characterImage: null,
  verified: null,
  redirectionPath: null,
  bio: null,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case actions.AUTH_START:
      return updateObject(state, { loading: true });

    case actions.AUTH_SUCCESS:
      return updateObject(state, { loading: false, ...action.payload });
    case actions.AUTH_ERROR:
      return updateObject(state, {
        ...action.payload,
        loading: false,
      });
    case actions.UPDATE_USER:
      return updateObject(state, {
        ...action.payload,
        loading: false,
      });
    case actions.AUTH_LOGOUT:
      return updateObject(state, action.payload);
    case actions.REDIRECT_PATH:
      return updateObject(state, {
        loading: false,
        redirectionPath: action.payload.redirectionPath,
      });
    case actions.CURRENT_USER:
      return updateObject(state, { ...action.payload });
    case actions.AUTH_FINISH:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};
