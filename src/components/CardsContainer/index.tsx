import type { } from "redux-thunk/extend-redux";
import { CardPokemon } from "src/components";
import { CustomSkeleton } from "src/components/CustomElements";
import { useAppSelector } from "src/store/hooks/useTypedSelector";
import "./style.scss";

export const CardsContainer = () => {
  const { pokemones, searchValue, filteredPokemones, isLoading } =
    useAppSelector((state) => state.pokemon);
  const { favorites } = useAppSelector((state) => state.favorites);

  if (isLoading) {
    return (
      <div className="box-card">
        {[...new Array(10)].map((item, index) => (
          <CustomSkeleton key={index} height="292px" />
        ))}
      </div>
    );
  }

  return (
    <div className="box-card">
      {(searchValue ? filteredPokemones : pokemones).map((item: any) => {
        return (
          <CardPokemon
            key={item.name}
            pokemon={item}
            isFavorite={!!favorites.find((e) => e.name === item.name)}
          />
        );
      })}
    </div>
  );
};
