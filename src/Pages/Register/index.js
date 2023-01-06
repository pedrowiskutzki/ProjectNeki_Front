import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pessoaService from '../../Services/request/pessoaService';
import { DivContainer, Formulario } from './styled';

export default function Register() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
         
        const pessoa = {
          login: login,
          password: password,
        };
  
        pessoaService.create(pessoa).then((res) => {
            console.log(res);
            console.log(res.data);
            alert("Usuario cadastrado com sucesso!")
        }).catch((err) => {
              alert("Alguma coisa deu errado!")
        });
    };

    return (
        <>
        <DivContainer>
            <Formulario>
                <h3>Cadastro Usuario</h3>
                <label>     
                <input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}  />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirmar Senha" />
                <button onClick={handleSubmit}> Cadastrar </button> 
                </label>
            </Formulario>

        </DivContainer>
    </>

    );
}