import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Components/Loading";
import { SkillModal } from "../../Components/Modal";
import Navbar from "../../Components/Navbar";
import pessoaSkillService from "../../Services/request/pessoaSkillService";
import {
  ButtonRemoveSkill,
  Card,
  CardSkills,
  Container,
  DivCard,
  DivRating,
  Title,
} from "./styled";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [pessoaSkill, setPessoaSkill] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updates, setUpdates] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [value, setValue] = useState(5);
  //Atualizar o knowledge_level
  function handleUpdateRating(id, newRating) {
    const dado = {
      knowledge_level: newRating,
    };
    pessoaSkillService
      .update(id, dado)
      .then((response) => {
        console.log(response);
        const updatedSkills = pessoaSkill.map((skill) => {
          if (skill.id === id) {
            return { ...skill, knowledge_level: newRating };
          } else {
            return skill;
          }
        });
        setPessoaSkill(updatedSkills);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // Faz o GetAll de user_skill
  useEffect(() => {
    get(); //Pegar Id do Usuario logado
    pessoaSkillService
      .getAll()
      .then((res) => {
        setPessoaSkill(res.data);
        setRemoveLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  // Delete
  function handleDeleteEventoEspecial(id) {
    pessoaSkillService
      .remove(id)
      .then((response) => {
        toast.success("Skill Deletada 🗑️", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const newSkills = pessoaSkill.filter((skill) => skill.id !== id);
        setPessoaSkill(newSkills);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Puxa o id no localStorage
  const get = async () => {
    const id = await localStorage.getItem("@id");
    setUserId(id);
  };
  //modal
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Navbar />
      <Container>
        <Title>
          <h1>Suas Skills</h1>
          <button onClick={openModal}>Adicionar Skill</button>
        </Title>
        <CardSkills>
          {pessoaSkill.length === 0 ? (
            <p></p>
          ) : (
            pessoaSkill.map((userSkill) => (
              <>
                {userId != userSkill.pessoa.id ? (
                  <p></p>
                ) : (
                  <Card id={userSkill.id}>
                    <DivCard>
                      <span>
                        <h1>{userSkill.skill.name}</h1>
                        <img
                          src={userSkill.skill.image_url}
                          width="140px"
                          height="140px"
                        />
                      </span>

                      <div>
                        <h4>Descrição:</h4>
                        <p>{userSkill.skill.description}</p>
                        <span>
                          <h3>
                            Versão: <p>{userSkill.skill.version}</p>{" "}
                          </h3>
                        </span>
                        <span>
                          <ButtonRemoveSkill
                            onClick={() =>
                              handleDeleteEventoEspecial(userSkill.id)
                            }
                          >
                            {" "}
                            Remover
                          </ButtonRemoveSkill>
                        </span>
                      </div>
                    </DivCard>
                    <DivRating>
                      <h2>Level</h2>{" "}
                      <Rating
                        size="small"
                        value={userSkill.knowledge_level}
                        max={10}
                        min={1}
                        onChange={(event, newValue) =>
                          handleUpdateRating(userSkill.id, newValue)
                        }
                        onChangeActive={(event, newHover) => {
                          setValue(newHover);
                        }}
                      />
                    </DivRating>
                  </Card>
                )}
              </>
            ))
          )}
          {!removeLoading && <Loading />}
        </CardSkills>
        <SkillModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </Container>
    </>
  );
}
