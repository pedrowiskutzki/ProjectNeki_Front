import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pessoaService from "../../Services/request/pessoaService";
import { DivContainer, Formulario, Icon } from "./styled";

export default function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");
  const [secure, setSecure] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const navigate = useNavigate();
  //Post de Usuario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      login !== null &&
      login !== "" &&
      password !== null &&
      password !== "" &&
      senhaConfirma !== null &&
      senhaConfirma !== ""
    )
      if (password === senhaConfirma) {
        const pessoa = {
          login: login,
          password: password,
        };
        pessoaService
          .create(pessoa)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            toast.success("Usuario cadastrado com sucesso!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/");
          })
          .catch((err) => {
            toast.error("Alguma coisa deu errado!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      } else {
        toast.warning("As senhas não estão iguais!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    else {
      toast.warning("Preencha todos os Campos!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <DivContainer>
        <Formulario>
          <h3>Cadastro Usuario</h3>
          <label>
            <input
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />

            <span>
              <input
                type={secure === true ? "password" : "text"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Icon onClick={() => setSecure(!secure)}>
                {secure === true ? (
                  <AiFillEye size={24} color={"#fff"} />
                ) : (
                  <AiFillEyeInvisible size={24} color={"#fff"} />
                )}
              </Icon>
            </span>
            <span>
              <input
                type={secureConfirm === true ? "password" : "text"}
                onChange={(e) => setSenhaConfirma(e.target.value)}
                placeholder="Confirmar Senha"
              />
              <Icon onClick={() => setSecureConfirm(!secureConfirm)}>
                {secureConfirm === true ? (
                  <AiFillEye size={24} color={"#fff"} />
                ) : (
                  <AiFillEyeInvisible size={24} color={"#fff"} />
                )}
              </Icon>
            </span>

            <button onClick={handleSubmit}> Cadastrar </button>
            <Link to="/">
              <p
                style={{ fontSize: "14px", marginTop: "10px", color: "black" }}
              >
                Se ja possui conta, Login{" "}
              </p>
            </Link>
          </label>
        </Formulario>
      </DivContainer>
    </>
  );
}
