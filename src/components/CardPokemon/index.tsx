import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Favorite } from "src/components/Favorites/Favorite/index";
import {
  useAppDispatch,
  useAppSelector,
} from "src/store/hooks/useTypedSelector";
import { PropsCard } from "src/models/models";
import { Favorites, FavoritesActionTypes } from "src/type/favorites";
import "./style.scss";

export const CardPokemon: FC<PropsCard> = ({ pokemon, isFavorite }) => {
  const { isLoading } =
    useAppSelector((state) => state.pokemon);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addingFavorites = async (pokemon: Favorites) => {
    await dispatch({
      type: FavoritesActionTypes.POKEMONES_FAVORITES_TOGGLER,
      payload: pokemon,
    });
  };

  return (
    <div className="card">
      <button
        className="button-add-favorite"
        onClick={() => addingFavorites(pokemon)}
      >
        <Favorite isFavorite={isFavorite} />
      </button>
      <img
        className="image"
        alt={pokemon.name}
        src={pokemon.sprites.other["official-artwork"].front_default}
        onClick={() => {
          navigate(`/pokemon/${pokemon.name}`);
        }}
        style={{ display: isLoading ? "none" : "block" }}
      />

      <div className={"pokemon-card"}>
        <h1>{pokemon.name}</h1>

        <div className="pokemon-features">
          {pokemon.types.map((element) => (
            <div
              className="pokemon-features__name"
              key={element.type.name}
            >
              {element.type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
