import { ADD_USER, CLEAN } from "./actions";

const initialState = {
  info: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        info: state.info.concat(action.payload),
      };
    case CLEAN:
      return {
        ...state,
        info: [],
      };
    default:
      return state;
  }
};
export default rootReducer;
