import React, { useContext, useEffect, useState } from 'react';
import { Card, CardSkills, Container, SideBar, Title } from './styled';
import Loading from "../../Components/Loading"
import AuthContext from "../../Context/auth";
import skillService from '../../Services/request/skillService';
import pessoaSkillService from '../../Services/request/pessoaSkillService';
import Navbar from '../../Components/Navbar';
import { SkillModal } from '../../Components/Modal';

export default function Home() {
  const [skill, setSkill] = useState([]);
  const [pessoaSkill, setPessoaSkill] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { userId } = useContext(AuthContext);
  const [removeLoading, setRemoveLoading] = useState(false);
  

  useEffect(() => {
    skillService
      .getAll()
      .then((res) => {
        setSkill(res.data);
        setRemoveLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

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
          {skill.length === 0 ? (
            <p></p>
          ) : (
            skill.map((skill) => (
              <>
                <Card>
                  <img src={skill.image_url} width="140px" height="140px" />
                  <h1>{skill.name}</h1>
                  <p>{skill.description}</p>
                  <h3>{skill.knowledge_level}</h3>
                </Card>
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