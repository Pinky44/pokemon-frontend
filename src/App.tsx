import { Routes } from "react-router-dom";
import { Navigate, Route } from "react-router";
import { Home, Login, Registration } from "./components/pages";
import { Favorites, Layout, PokemonInfo, PrivateOutlet } from "./components";
import "./style.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateOutlet />}>
            <Route index element={<Home />} />

            <Route path="/" element={<Home />} />

            <Route path="/pokemon/:name" element={<PokemonInfo />} />

            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/favorite" element={<Favorites />} />
          </Route>

          <Route path="/auth" element={<Login />} />

          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
