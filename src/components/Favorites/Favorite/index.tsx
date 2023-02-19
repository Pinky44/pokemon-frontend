import { ReactComponent as Icon } from "src/images/favorite.svg";
import "./style.scss";

export interface FavoriteProps {
  isFavorite: boolean;
}

export const Favorite: React.FC<FavoriteProps> = ({
  isFavorite,
}) => {
  return (
    <div>
      {isFavorite ? (
        <Icon className="img-favorite" />
      ) : (
        <Icon className="img-no-favorite" />
      )}
    </div>
  );
};
