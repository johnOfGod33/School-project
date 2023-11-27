import React from "react";
import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { basicAxios } from "../../Api/axios";
import UserContextHook from "../../Hooks/userContextHook";
import style from "./SignIn.module.css";
import Button from "../../Layout/Button/Button";
const SignIn = () => {
  const { userInfo, setUserInfo } = UserContextHook();
  let nav = useNavigate();
  return (
    <div className={style.signIn}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          basicAxios
            .post("/user/signin", values)
            .then((res) => {
              setUserInfo((prevState) => {
                return {
                  ...prevState,
                  token: res.data.token,
                  admin_user: res.data.admin_user,
                };
              });
              console.log(userInfo);
              nav("/filiere");
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
                type={"submit"}
                title={"valider"}
                onClick={props.handleSubmit}
              />
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
