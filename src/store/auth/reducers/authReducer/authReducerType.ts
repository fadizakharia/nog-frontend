export interface authReducerState {
  isLoggedIn?: boolean;
  loading?: boolean;
  errors?: null | string[];
  characterName?: string | null;
  characterImage?: string | null;
  verified?: boolean | null;
  redirectionPath?: string | null;
  bio?: string | null;
}
export type AuthAction = {
  type:
    | "AUTH_START"
    | "AUTH_FINISH"
    | "AUTH_ERROR"
    | "AUTH_LOGOUT"
    | "AUTH_SUCCESS"
    | "REDIRECT_PATH"
    | "CURRENT_USER"
    | "UPDATE_USER";
  payload: authReducerState;
};
