export const initialState = {
  query: "",
  results: [],
  error: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // carrega do localStorage
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload, error: null };

    case "SET_RESULTS":
      return { ...state, results: action.payload, error: null };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.find((a) => a.mal_id === action.payload.mal_id);
      let updated;
      if (exists) {
        updated = state.favorites.filter((a) => a.mal_id !== action.payload.mal_id);
      } else {
        updated = [...state.favorites, action.payload];
      }
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { ...state, favorites: updated };
    }

    default:
      return state;
  }
}
