import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { SkillModal } from "../../Components/Modal";
import Navbar from "../../Components/Navbar";
import pessoaSkillService from "../../Services/request/pessoaSkillService";
import {
  ButtonRemoveSkill,
  ButtonsLevelDecrease,
  ButtonsLevelIncrease,
  Card,
  CardSkills,
  Container,
  DivButtons,
  Title,
} from "./styled";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [pessoaSkill, setPessoaSkill] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  async function handleUpdate(id, newLevel) {
    if (newLevel < 0 || newLevel > 10) {
      throw new Error("O novo nível de conhecimento deve estar entre 0 e 10.");
    } else {
      const dado = {
        knowledge_level: newLevel,
      };
      await pessoaSkillService
        .update(id, dado)
        .then((response) => {
          console.log(response);
          const updatedSkills = pessoaSkill.map((skill) => {
            if (skill.id === id) {
              return { ...skill, knowledge_level: newLevel };
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
  }

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

  function handleDeleteEventoEspecial(id) {
    pessoaSkillService
      .remove(id)
      .then((response) => {
        alert("Skill Deletada");
        const newSkills = pessoaSkill.filter((skill) => skill.id !== id);
        setPessoaSkill(newSkills);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const get = async () => {
    const id = await localStorage.getItem("@id");
    setUserId(id);
  };

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
                      <h3>Versão: {userSkill.skill.version}</h3>
                      <DivButtons>
                        <ButtonsLevelDecrease
                          onClick={() =>
                            handleUpdate(
                              userSkill.id,
                              userSkill.knowledge_level - 1
                            )
                          }
                        >
                          -
                        </ButtonsLevelDecrease>
                        <h2>Level {userSkill.knowledge_level}</h2>
                        <ButtonsLevelIncrease
                          onClick={() =>
                            handleUpdate(
                              userSkill.id,
                              userSkill.knowledge_level + 1
                            )
                          }
                        >
                          +
                        </ButtonsLevelIncrease>
                      </DivButtons>
                      <span>
                        <ButtonRemoveSkill
                          onClick={() =>
                            handleDeleteEventoEspecial(userSkill.id)
                          }
                        >
                          Remover
                        </ButtonRemoveSkill>
                      </span>
                    </div>
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
