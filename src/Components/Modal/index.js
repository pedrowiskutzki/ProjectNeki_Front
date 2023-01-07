import { useContext, useEffect, useState } from "react";
import skillService from "../../Services/request/skillService";
import { Card, CardSkills, DivButton, ExitButton, SaveButton } from "./styled";
import Modal from "react-modal";
import Loading from "../Loading";
import { BsXLg } from "react-icons/bs";
import pessoaSkillService from "../../Services/request/pessoaSkillService";
import { useNavigate } from "react-router-dom";

export const SkillModal = ({ modalIsOpen, closeModal }) => {

  const [skill, setSkill] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  const navigate = useNavigate();


  function refreshPage() {
    window.location.reload(false);
  }

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

  const handleSubmit = async (event, idSkill) => {
    event.preventDefault();
    const id = await localStorage.getItem("@id");
    const postPessoaSkill = {
      pessoa: { id: id },
      skill: { id: idSkill },
      knowledge_level: 0
    };

    pessoaSkillService.create(postPessoaSkill).then((res) => {
      console.log(res);
      console.log(res.data);
      alert("Skill Salva")
      refreshPage();

    }).catch((err) => {
      alert("Ocorreu algum erro tente novamente");
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: 'fixed',
          zIndex: 1020,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          background: '#1C1C1C',
          width: '55rem',
          maxWidth: 'calc(100vw - 2rem)',
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto',
          position: 'relative',
          border: '0px',
          borderRadius: '1rem',
        }
      }}
    >
      <DivButton>
        <button onClick={closeModal}><BsXLg size={28} /></button>
      </DivButton>
      <CardSkills>
        {skill.length === 0 ? (
          <p></p>
        ) : (
          skill.map((skill) => (
            <>
              <Card id={skill.id}>
                <img src={skill.image_url} width="140px" height="140px" />
                <h1>{skill.name}</h1>
                <p>{skill.description}</p>
                <h3>{skill.knowledge_level}</h3>
                <button onClick={(event) => handleSubmit(event, skill.id)}>Adicionar</button>
              </Card>
            </>
          ))
        )}
        {!removeLoading && <Loading />}
      </CardSkills>


    </Modal>
  );
};