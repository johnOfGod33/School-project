import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Components/Layout/HomeLayout/HomeLayout";
import OtherLayout from "./Components/Layout/OtherLayout/OtherLayout";
import Accueil from "./Components/Pages/Accueil/Accueil";
import Actualite from "./Components/Pages/Actualite/Actualite";
import Filiere from "./Components/Pages/Filiere/Filiere";
import Cours from "./Components/Pages/Cours/Cours";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import ActuDetails from "./Components/Pages/ActuDetails/ActuDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeLayout}>
          <Route index Component={Accueil} />
        </Route>
        <Route path="/" Component={OtherLayout}>
          <Route path="filiere" Component={Filiere} />
          <Route path="filiere/cour/:id_filiere" Component={Cours} />
          <Route path="actu" Component={Actualite} />
          <Route path="actu/actuDetail/:id_actu" Component={ActuDetails} />
          <Route path="Signin" Component={SignIn} />
          <Route path="Signup" Component={SignUp} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
