import { ActionTypes } from "../constants/action-types";

const initState = {
  data: []
};
export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return {...state, data:payload};
    default:
      return state;
  }
};
