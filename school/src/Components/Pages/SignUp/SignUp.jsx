import React from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import { basicAxios } from "../../Api/axios";
import style from "./SignUp.module.css";
import Button from "../../Layout/Button/Button";
const SignUp = () => {
  return (
    <div className={style.signUp}>
      <section className={style.form}>
        <h3>INSCRIPTION</h3>
        <Formik
          initialValues={{
            nom: "",
            prenom: "",
            dateDeNaissance: "",
            pays: "",
            email: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            basicAxios
              .post("/user/signup", values)
              .then((res) => {
                console.log(res.data);
                actions.resetForm();
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          {(props) => {
            return (
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    value={props.values.nom}
                    onChange={props.handleChange("nom")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Prenom"
                    value={props.values.prenom}
                    onChange={props.handleChange("prenom")}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Date de naissance"
                    value={props.values.dateDeNaissance}
                    onChange={props.handleChange("dateDeNaissance")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Pays"
                    value={props.values.pays}
                    onChange={props.handleChange("pays")}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="email"
                    value={props.values.email}
                    onChange={props.handleChange("email")}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="mot de passe"
                    value={props.values.password}
                    onChange={props.handleChange("password")}
                  />
                </div>
                <Button
                  title={"valider"}
                  onClick={props.handleSubmit}
                  type={"submit"}
                />
              </div>
            );
          }}
        </Formik>
        <section>
          <NavLink to={"/Signin"}>
            Vous avez deja un compte ? Connectez vous
          </NavLink>
        </section>
      </section>
    </div>
  );
};

export default SignUp;
