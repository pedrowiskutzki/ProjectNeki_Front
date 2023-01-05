import React, { useContext } from 'react';
import { useState } from 'react';
import AuthContext from '../../Context/auth';
import { Nav, NavMenu, Button} from './NavbarElements';

const Navbar = () => {

  const { signOut} = useContext(AuthContext);

  return (
    <>
      <Nav>
          <img src={require('../../images/LogoNeki.png')} width="75x" heigth="120px" alt='' />        
        <Button onClick={signOut}>Logout</Button>    
      </Nav>
    </>
  );
};

export default Navbar;
