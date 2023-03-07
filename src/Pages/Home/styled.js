import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--cor-primaria);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 1rem;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 4.5;
    height: 10vh;
  }

  h1 {
    font-size: 50px;
    color: var(--cor-complementar-4);
    border-bottom: 3px solid var(--cor-complementar-4);

    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
  }

  button {
    width: 120px;
    height: 45px;
    margin-right: -20px;
    border-radius: 10px;
  }
`;
export const CardSkills = styled.div`
  width: 85%;
  height: auto;
  background-color: var(--cor-complementar-2);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Card = styled.div`
  width: 350px;
  height: 220px;
  background-color: black;
  border: 2px solid var(--cor-complementar-3);
  color: white;
  margin: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;

  :hover {
    border: 4px solid var(--cor-complementar-3);
    background-color: #05c5ff;
    color: black;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-top: 10px;
    filter: drop-shadow(0px 0px 7px blue);
  }
  input {
    width: 40px;
    height: 25px;
  }
  p {
    text-align: initial;
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  h1 {
    text-align: center;
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
    filter: drop-shadow(0px 0px 5px blue);
  }
  h3 {
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  h4 {
    margin-left: 10px;
  }
`;

export const DivButtons = styled.span`
  display: flex;
  flex-direction: row;
`;

export const ButtonsLevelIncrease = styled.button`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  font-size: 30px;
  justify-content: center;
  background-color: #6eff74;
  margin-left: 10px;

  :hover {
    border-width: 3px;
    border-color: white;
    background-color: #6eff1d;
  }
`;

export const ButtonsLevelDecrease = styled.button`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  font-size: 30px;
  justify-content: center;
  background-color: #e3c76b;
  margin-right: 10px;

  :hover {
    border-width: 5px;
    border-color: white;
    background-color: #fff200;
  }
`;

export const ButtonRemoveSkill = styled.button`
  display: flex;
  align-items: center;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  background-color: #db4a35;
  margin-right: 10px;

  :hover {
    border-width: 5px;
    border-color: white;
  }
`;
