import { useMemo } from "react";
import type { } from "redux-thunk/extend-redux";
import { CardPokemon } from "src/components";
import {
  useAppSelector,
} from "src/store/hooks/useTypedSelector";
import "./style.scss";

export const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.favorites);

  const markedFavorites = useMemo(() => favorites, []);

  return (
    <div className="box_class">
      {markedFavorites?.map((item: any, index) => {
        return <CardPokemon key={index} pokemon={item} isFavorite={!!favorites.find((e) => e.name === item.name)} />;
      })}
    </div>
  );
};
