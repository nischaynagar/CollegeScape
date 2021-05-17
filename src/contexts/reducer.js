export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: { ...action.user },
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: { ...action.user },
      };
    case "UNSET_USER":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
