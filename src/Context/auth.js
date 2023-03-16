import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../Services/api/api";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [pessoa, setPessoa] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    // pega o token do storage quando a pagina for atualizada
    const token = localStorage.getItem("token");
    const pessoa = localStorage.getItem("pessoa");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setToken(token);
      setPessoa(pessoa);
      setIsAuthenticated(true);
      setUserId(localStorage.getItem("@id"));
    }
  }, []);
  //Login
  function signIn(login, senhaLogin) {
    api.post("/pessoa/login", { login: login, password: senhaLogin }).then(
      (resp) => {
        var token = resp.data.token;
        var pessoa = resp.data.pessoa;
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setToken(token);
        setPessoa(pessoa);
        localStorage.setItem("token", token);
        localStorage.setItem("pessoa", pessoa);
        localStorage.setItem("@authenticated", true);
        localStorage.setItem("@token", token);
        localStorage.setItem("@id", pessoa.id);
        setIsAuthenticated(true);
        toast.success("Sucesso, Bem Vindo!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      },
      (error) => {
        toast.error("Login ou Senha invalidos! 😔", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    );
  }
  //Sair
  const signOut = () => {
    setIsAuthenticated(false);
    setUserId("");
    setPessoa(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("pessoa");
    localStorage.removeItem("@authenticated");
    localStorage.removeItem("@token");
    localStorage.removeItem("@id");

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
