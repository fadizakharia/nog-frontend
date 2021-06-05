import { Dispatch } from "redux";
import { getCurrentUser, login, logout, register } from "../../../../api/auth";
import { updateUserForm } from "../../../../api/users";
import {
  AUTH_ERROR,
  AUTH_FINISH,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
  CURRENT_USER,
  REDIRECT_PATH,
  UPDATE_USER,
} from "../../../actions";
export const currentUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: AUTH_START });
    const currentUser = await getCurrentUser();

    if (currentUser.data) {
      dispatch({
        type: CURRENT_USER,
        payload: {
          isLoggedIn: true,
          characterName: currentUser.data.characterName,
          verified: currentUser.data.verified,
          bio: currentUser.data.bio,
          characterImage: currentUser.data.profilePictureURI,
        },
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          isLoggedIn: false,
        },
      });
    }
    return dispatch({ type: AUTH_FINISH });
  };
};
export const auth = (characterName: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: AUTH_START });
      const result = await login({ characterName, password });
      console.log(result.response);

      if (!result.data) {
        return dispatch({
          type: AUTH_ERROR,
          payload: { errors: [result.response.data.error.message] },
          loading: false,
        });
      } else {
        console.log("success the image is : " + result.data.characterImage);

        return dispatch({
          type: AUTH_SUCCESS,
          payload: {
            errors: null,
            characterName: result.data.characterName,
            characterImage: result.data.profilePictureURI
              ? result.data.profilePictureURI
              : null,
            bio: result.data.bio,
            verified: result.data.verified,
            isLoggedIn: true,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const authSignup = (
  characterName: string,
  password: string,
  confirm: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: AUTH_START });
      const result = await register({ characterName, password, confirm });
      if (!result.data) {
        return dispatch({
          type: AUTH_ERROR,
          payload: { errors: [result.response.data.error.message] },
          loading: false,
        });
      } else {
        return dispatch({
          type: AUTH_SUCCESS,
          payload: {
            isLoggedIn: true,
            errors: null,
            characterName: result.data.characterName,

            verified: result.data.verified,
            loading: false,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const Logout = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: "AUTH_START" });
    const result = await logout();
    if (result.status < 300 && result.status >= 200) {
      return dispatch({
        type: AUTH_LOGOUT,
        payload: {
          isLoggedIn: false,
          loading: false,
          errors: null,
          characterName: null,
          characterImage: null,
          verified: null,
          bio: null,
        },
      });
    } else {
      return dispatch({ type: "" });
    }
  };
};
export const updateUser = (
  characterName?: string | null,
  bio?: string | null,
  profilePicture?: File | null
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: AUTH_START });
    const result = await updateUserForm(characterName, bio, profilePicture);
    console.log(result);
    let payload = {};
    if (!result && !result.data) {
      console.log(result.data);

      return dispatch({
        type: AUTH_ERROR,
        payload: {
          errors: [result.response.data.error.message],
          loading: false,
        },
      });
    } else {
      return dispatch({
        type: UPDATE_USER,
        payload: {
          loading: false,
          characterImage: result.data.profilePictureURI,
          bio: result.data.bio,
        },
      });
    }
  };
};
