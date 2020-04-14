import { INITIALIZE } from "../types/app";

const initialState = {
  initialized: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INITIALIZE:
      return { ...state, initialized: payload };
    default:
      return state;
  }
}
