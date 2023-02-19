export type PokemonesFavoritesAction = FavoritesSuccessAction;

export interface FavoritesState {
  error: null | string;
  favorites: Favorites[];
}

export interface Favorites {
  id: string;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
export enum FavoritesActionTypes {
  POKEMONES_FAVORITES_TOGGLER = "POKEMONES_FAVORITES_TOGGLER",
}

interface FavoritesSuccessAction {
  type: FavoritesActionTypes.POKEMONES_FAVORITES_TOGGLER;
  payload: Favorites;
}
