import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Components/Layout/HomeLayout/HomeLayout";
import Accueil from "./Components/Pages/Accueil/Accueil";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeLayout}>
          <Route index Component={Accueil} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
