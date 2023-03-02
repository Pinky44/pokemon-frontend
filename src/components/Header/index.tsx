import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  useAppDispatch,
  useAppSelector,
} from "src/store/hooks/useTypedSelector";
import { Search } from "src/components/Search";
import { Favorite } from "src/components/Favorites/Favorite";
import { UserActionTypes } from "src/type/user";
import { localStorageTokenPair } from "src/helpers/localStorage";
import logo from "src/images/logo.png";
import "./style.scss";

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { favorites } = useAppSelector((state) => state.favorites);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const redirectionFavorite = () => {
    navigate("/favorite");
  };

  const redirectionHome = () => {
    navigate("/home");
  };

  const logout = () => {
    dispatch({
      type: UserActionTypes.CHECK_IS_AUTH_USER_ERROR,
    });

    localStorageTokenPair.clear();
  };

  return (
    <div className="header-wrapper">
      <div className="header-block-logo">
        <img className="img-logo" src={logo} alt="logo" />
      </div>

      {isAuth && (
        <div className="block-element">
          <button className="block-element-button" onClick={redirectionHome}>
            <HomeIcon />
          </button>

          <button
            className="block-element-button"
            onClick={redirectionFavorite}
          >
            <div className="header-favorites">
              <Favorite isFavorite={false} />

              <span className={favorites.length ? "quantity-favorite" : "empty-quantity-favorite"}>{favorites.length}</span>
            </div>
          </button>

          <Search />

          <button className="block-element-button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
