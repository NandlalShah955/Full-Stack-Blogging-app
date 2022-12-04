import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/react";

import { AuthContext } from "../Context/AuthContext";
function Privateroute({ children }) {
  const navi = useNavigate();
  const { authState } = useContext(AuthContext);

  if (!authState.isAuth) {
    return (
      <div>
        <Alert status="warning">
          <AlertIcon />
          Seems like you are not admin
        </Alert>
        {setTimeout(() => {
          navi("/");
        }, 2000)}
      </div>
    );
  }

  return children;
}

export default Privateroute;
