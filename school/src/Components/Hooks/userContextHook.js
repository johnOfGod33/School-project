import React, { useContext } from "react";
import { userContext } from "../Context/userContext";
const UserContextHook = () => {
  return useContext(userContext);
};

export default UserContextHook;
