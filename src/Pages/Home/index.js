import React, { useContext, useEffect, useState } from 'react';
import { CardSkills, Container, SideBar, Title } from './styled';
import AuthContext from "../../Context/auth";
import skillService from '../../Services/request/skillService';
import pessoaSkillService from '../../Services/request/pessoaSkillService';
import Navbar from '../../Components/Navbar';

export default function Home() {
    const [skill, setSkill] = useState([]);
    const [pessoaSkill, setPessoaSkill] = useState([]);
    const {userId } = useContext(AuthContext);

    useEffect(() => {
        pessoaSkillService
        .getAll()
        .then((res) => {
            setPessoaSkill(res.data);
        })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        }, []);

        
return(
  <>
  <Navbar/>
    <Container> 
        <Title>    
        <h1>Suas Skills</h1>
        </Title>
        <CardSkills>
        <h2>{userId}</h2>
        {pessoaSkill.length === 0 ? (
              <p></p>
            ) : (
                pessoaSkill.map((skill) => (
                <>
            <div>
                <h1>Skills</h1>
                <h2>{skill.skill.name}</h2>

            </div>
        </>
        ))
      )}
      </CardSkills>
    </Container>
    </>
);
}