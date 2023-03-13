import React, { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth";
import { Checkbox, DivContainer, Formulario, Icon } from "./styled";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [passwordRemember, setPasswordRemember] = useState(false);

  useEffect(() => {
    //Salvar Password no localStorage
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedPassword) {
      setPassword(storedPassword);
      setPasswordRemember(true);
    }
  }, []);

  function handleSignIn(e) {
    e.preventDefault();
    signIn(login, password);
    //Se o Valor for true Salva no LocalStorage
    if (passwordRemember) {
      localStorage.setItem("rememberedPassword", password);
      //Se o Valor for False Salva apaga no LocalStorage
    } else {
      localStorage.removeItem("rememberedPassword");
    }
  }

  function handleRememberMe(e) {
    //Pegar o valor da checkbox
    setPasswordRemember(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("rememberedPassword");
    }
  }

  return (
    <>
      <DivContainer>
        <Formulario>
          <label>
            <input
              style={{ marginTop: "15px" }}
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <span>
              <input
                style={{ marginTop: "15px" }}
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
            <div>
              <Checkbox
                type="checkbox"
                checked={passwordRemember}
                onChange={handleRememberMe}
              />
              <p>Lembrar senha</p>
            </div>
            <button style={{ marginTop: "20px" }} onClick={handleSignIn}>
              {" "}
              Entrar{" "}
            </button>
          </label>
          <Link to="/register">
            <button style={{ marginTop: "0px" }}> Cadastro </button>
          </Link>
        </Formulario>
      </DivContainer>
    </>
  );
}
