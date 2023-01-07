import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../Context/auth";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export function Router() {
    const { isAuthenticated } = useContext(AuthContext);

    //Nao athenticado
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<h1>Erro 404 - Página não Encontrada</h1>} />
            </Routes>
        );
    }
    //athenticacao
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<h1>Erro 404 - Página não Encontrada</h1>} />
        </Routes>
    );
}