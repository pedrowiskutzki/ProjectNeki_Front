import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../Context/auth";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export function Router() {
    const { isAuthenticated } = useContext(AuthContext);

    //Nao athenticado
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />  
            </Routes>
        );
    }
    //athenticacao
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}