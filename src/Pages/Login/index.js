import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/auth';
import { DivContainer, Formulario } from './styled';

export default function Login() {

    const { signIn } = useContext(AuthContext);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
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
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignIn}> Entrar </button> 
                </label>
            </Formulario>

        </DivContainer>
    </>

    );
}