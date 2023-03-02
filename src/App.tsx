import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { Navigate, Route } from "react-router";
import {
  Login, Registration
} from "./components/pages";
import { Layout, PokemonInfo, PrivateOutlet } from "./components";
import "./style.scss";

const Home = React.lazy(() => import("./components/pages/Home/index").then(module => ({ default: module.Home })));
const Favorites = React.lazy(() => import("./components/Favorites/index").then(module => ({ default: module.Favorites })));

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<Suspense fallback={<p className="loader"></p>}><Home /></Suspense>} />

            <Route path="/pokemon/:name" element={<PokemonInfo />} />

            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/favorite" element={<Suspense fallback={<p className="loader"></p>}><Favorites /></Suspense>} />
          </Route>

          <Route path="/auth" element={<Login />} />

          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
