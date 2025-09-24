export const initialState = {
  query: "",
  results: [],
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload, error: null };
    case "SET_RESULTS":
      return { ...state, results: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
