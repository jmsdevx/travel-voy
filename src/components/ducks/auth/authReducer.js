import { CONSTANTS } from "../constants";

export const initialState = {
  user: {},
  pending: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS:
      return { ...state };
    default:
      return state;
  }
}
