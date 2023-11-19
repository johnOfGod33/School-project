import React from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import style from "./SignIn.module.css";
import Button from "../../Layout/Button/Button";
const SignIn = () => {
  return (
    <div className={style.signIn}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          return (
            <div>
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
              <Button title={"valider"} onClick={props.handleSubmit} />
            </div>
          );
        }}
      </Formik>
      <section>
        <NavLink to={"/Signup"}>
          Vous n'avez pas de compte ? Inscrivez vous
        </NavLink>
      </section>
    </div>
  );
};

export default SignIn;
