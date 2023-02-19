import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { paginationReducer } from "./reducers/paginationReducer";
import { favoritesReducer } from "./reducers/favoritesReducer";
import { pokemonInfoReducer } from "./reducers/pokemonInfoReducer";

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
  pagination: paginationReducer,
  favorites: favoritesReducer,
  pokemonInfo: pokemonInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
