export const initialState = 0;
export const reducer = (state, action) => {
  switch (action.type) {
    case "increace":
      return state + action.payload;
    case "decreace":
      return state - action.payload;
    case "reset":
      return action.payload;
    default:
      return state;
  }
};
