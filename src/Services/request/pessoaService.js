import { api } from "../api/api";

const get = (id) => {
    return api.get(`pessoa/${id}`);
};

const create = (data) => {
    return api.post("pessoa", data);
};

const createLogin = (data) => {
    return api.post("pessoa/login", data);
};

const remove = (id) => {
    return api.delete(`pessoa/${id}`);
};
const pessoaService = {
    get,
    create,
    remove,
    createLogin
};
export default pessoaService;
