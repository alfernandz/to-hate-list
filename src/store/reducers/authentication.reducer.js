import { userConstants } from './../constants';

export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        user: action.user,
        loggingError: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        user: null,
        loggingError: true,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}