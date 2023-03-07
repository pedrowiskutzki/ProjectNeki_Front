import { api } from "../api/api";

const getAll = () => {
  return api.get("pessoa_skill");
};

const get = (id) => {
  return api.get(`pessoa_skill/${id}`);
};

const create = (data) => {
  return api.post("pessoa_skill", data);
};

const update = (id, data) => {
  return api.put(`pessoa_skill/update_level/${id}`, data);
};

const remove = (id) => {
  return api.delete(`pessoa_skill/${id}`);
};
const pessoaSkillService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default pessoaSkillService;
