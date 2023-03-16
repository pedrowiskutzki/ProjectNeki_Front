import React, { useContext } from "react";
import AuthContext from "../../Context/auth";
import { Button, Nav } from "./NavbarElements";

const Navbar = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Nav>
        <img
          src={require("../../images/LogoNekiWhite.png")}
          width="70px"
          heigth="90px"
          alt=""
        />
        <Button onClick={signOut}>Logout</Button>
      </Nav>
    </>
  );
};

export default Navbar;
