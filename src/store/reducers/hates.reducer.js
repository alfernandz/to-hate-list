import { hatesConstants } from './../constants';

export function hates(state = [], action) {
  switch (action.type) {
    case hatesConstants.GET_SUCCESS:
    case hatesConstants.SET_SUCCESS:
      return action.hates;
    case hatesConstants.GET_FAILURE:
      return null;
    default:
      return state
  }
}