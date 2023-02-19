import {
  PokemonesFavoritesAction,
  FavoritesActionTypes,
  FavoritesState,
} from "src/type/favorites";

const initialState: FavoritesState = {
  error: null,
  favorites: [],
};

export const favoritesReducer = (
  state = initialState,
  action: PokemonesFavoritesAction
): FavoritesState => {
  switch (action.type) {
    case FavoritesActionTypes.POKEMONES_FAVORITES_TOGGLER:
      if (state.favorites.find((e) => e.name === action.payload.name)) {
        return {
          ...state,
          error: null,
          favorites: state.favorites.filter(
            (e) => e.name !== action.payload.name
          ),
        };
      }
      return {
        ...state,
        error: null,
        favorites: state.favorites.concat(action.payload),
      };
    default:
      return state;
  }
};
