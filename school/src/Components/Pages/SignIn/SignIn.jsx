import React from "react";
import style from "./SignIn.module.css";
import { Formik } from "formik";
import Button from "../../Layout/Button/Button";
const SignIn = () => {
  return (
    <div>
      <Formik
        initialValues={{
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
              <input
                type="email"
                placeholder="email"
                onChange={props.handleChange("email")}
              />
              <input
                type="password"
                placeholder="mot de passe"
                onChange={props.handleChange("password")}
              />
              <Button title={"valider"} onClick={props.handleSubmit} />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
