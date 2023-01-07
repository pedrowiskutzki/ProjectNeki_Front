import React, { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import pessoaService from '../../Services/request/pessoaService';
import { DivContainer, Formulario, Icon } from './styled';

export default function Register() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [senhaConfirma, setSenhaConfirma] = useState("");
    const [secure, setSecure] = useState(true);
    const [secureConfirm, setSecureConfirm] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (login !== null && login !== "" && password !== null && password !== "" && senhaConfirma !== null && senhaConfirma !== "")
            if (password === senhaConfirma) {
                const pessoa = {
                    login: login,
                    password: password,
                };
                pessoaService.create(pessoa).then((res) => {
                    console.log(res);
                    console.log(res.data);
                    alert("Usuario cadastrado com sucesso!")
                    navigate("/")
                }).catch((err) => {
                    alert("Alguma coisa deu errado!")
                });
            } else {
                alert("As senhas não estão iguais")
            } else {
            alert("Preencha todos os Campos")
        }
    };

    return (
        <>
            <DivContainer>
                <Formulario>
                    <h3>Cadastro Usuario</h3>
                    <label>
                        <input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />

                        <span>
                            <input type={secure === true ? "password" : "text"} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Icon onClick={() => setSecure(!secure)}>
                                {secure === true ?
                                    <AiFillEye size={24} color={'#fff'} />
                                    :
                                    <AiFillEyeInvisible size={24} color={'#fff'} />
                                }
                            </Icon>
                        </span>
                        <span>
                            <input type={secureConfirm === true ? "password" : "text"} onChange={(e) => setSenhaConfirma(e.target.value)} placeholder="Confirmar Senha" />
                            <Icon onClick={() => setSecureConfirm(!secureConfirm)}>
                                {secureConfirm === true ?
                                    <AiFillEye size={24} color={'#fff'} />
                                    :
                                    <AiFillEyeInvisible size={24} color={'#fff'} />
                                }
                            </Icon>
                        </span>

                        <button onClick={handleSubmit}> Cadastrar </button>
                        <Link to='/'><p style={{ fontSize: "14px", marginTop: "10px", color: "#3EDEBE" }}>Se ja possui conta, Login </p></Link>
                    </label>
                </Formulario>

            </DivContainer>
        </>

    );
}