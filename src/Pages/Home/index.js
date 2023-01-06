import React, { useContext, useEffect, useState } from 'react';
import { Card, CardSkills, Container, SideBar, Title } from './styled';
import Loading from "../../Components/Loading"
import AuthContext from "../../Context/auth";
import skillService from '../../Services/request/skillService';
import pessoaSkillService from '../../Services/request/pessoaSkillService';
import Navbar from '../../Components/Navbar';
import { SkillModal } from '../../Components/Modal';

export default function Home() {
  const [userId, setUserId] = useState('');
  const [pessoaSkill, setPessoaSkill] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    get()
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
        alert("Skill Deletada")
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const get = async () => {
    const id = await localStorage.getItem("@id");
    setUserId(id)
  }

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
              {userId != userSkill.pessoa.id ?(
                <p></p>
              ) : (
                <Card id={userSkill.id}>
                  <img src={userSkill.skill.image_url} width="140px" height="140px" />
                  <h1>{userSkill.skill.name}</h1>
                  <p>{userSkill.skill.description}</p>
                  <h3>{userSkill.knowledge_level}</h3>
                  <button onClick={() => handleDeleteEventoEspecial(userSkill.id)}>Remover</button>
                </Card>
                )}
              </>
            ))
          )}
          {!removeLoading && <Loading />}
        </CardSkills>
        <SkillModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>

      </Container>
    </>
  );
}