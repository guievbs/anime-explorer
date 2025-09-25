export const initialState = {
  query: "",
  results: [],
  error: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  darkMode: JSON.parse(localStorage.getItem("darkMode")) ?? false,
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
      const exists = state.favorites.find(
        (a) => a.mal_id === action.payload.mal_id
      );
      let updated;
      if (exists) {
        updated = state.favorites.filter(
          (a) => a.mal_id !== action.payload.mal_id
        );
      } else {
        updated = [...state.favorites, action.payload];
      }
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { ...state, favorites: updated };
    }

    case "REMOVE_FAVORITE": {
      const updated = state.favorites.filter(
        (a) => a.mal_id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { ...state, favorites: updated };
    }

    case "CLEAR_FAVORITES":
      localStorage.removeItem("favorites");
      return { ...state, favorites: [] };

    case "TOGGLE_THEME": {
      const newMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return { ...state, darkMode: newMode };
    }

    case "SET_RANDOM":
      return {
        ...state,
        results: [action.payload],
        query: "random",
        error: null,
      };

    case "RESET_SEARCH":
      return { ...state, query: "", results: [], error: null };

    default:
      return state;
  }
}
