import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/auth';
import { DivContainer, Formulario, Icon } from './styled';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {

    const { signIn } = useContext(AuthContext);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);
    const navigate = useNavigate();

    function handleSignIn(e) {
        e.preventDefault()
       signIn(login, password)
    }

    return (
        <>
        <DivContainer>
            <Formulario>
                <label>     
                <input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}  />
                <span>
                <input type={secure === true ? "password" : "text"} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Icon onClick={() =>  setSecure(!secure)}>
                    {secure === true ?
                    <AiFillEye size={24} color={'#fff'}/>
                    :
                    <AiFillEyeInvisible size={24} color={'#fff'}/>
                    }
                </Icon>
                </span>
                <button onClick={handleSignIn}> Entrar </button> 
                </label>
                <Link to='/register'><button style={{marginTop:"5px"}}> Cadastro </button></Link>
            </Formulario>

        </DivContainer>
    </>

    );
}