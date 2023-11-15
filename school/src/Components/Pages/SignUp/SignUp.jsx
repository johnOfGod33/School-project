import React from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import style from "./SignUp.module.css";
import Button from "../../Layout/Button/Button";
const SignUp = () => {
  return (
    <div className={style.signUp}>
      <Formik
        initialValues={{
          nom: "",
          prenom: "",
          dateDeNaissance: new Date(),
          pays: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => {
          return (
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  onChange={props.handleChange("nom")}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date de naissance"
                  onChange={props.handleChange("dateDeNaissance")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Pays"
                  onChange={props.handleChange("pays")}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  onChange={props.handleChange("email")}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  onChange={props.handleChange("email")}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="mot de passe"
                  onChange={props.handleChange("password")}
                />
              </div>
              <Button title={"valider"} onClick={props.handleSubmit} />
            </div>
          );
        }}
      </Formik>
      <section>
        <NavLink to={"/Signin"}>
          Vous avez deja un compte ? Connectez vous
        </NavLink>
      </section>
    </div>
  );
};

export default SignUp;
