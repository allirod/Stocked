import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: true,
};

const userReducer = (
  state = initialState,
  action: { type: string; payload?: unknown }
) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        loggedIn: true,
      };
      break;
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
