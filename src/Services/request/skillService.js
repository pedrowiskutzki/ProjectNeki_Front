import { api } from "../api/api";

const getAll = () => {
    return api.get("skill");
};

const get = (id) => {
    return api.get(`skill/${id}`);
};

const create = (data) => {
    return api.post("skill", data);
};

const update = (id, data) => {
    return api.put(`skill/${id}`, data);
};

const remove = (id) => {
    return api.delete(`skill/${id}`);
};
const skillService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default skillService;
