import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--cor-complementar-1);
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
    color: #271dff;
    border-bottom: 2px solid #271dff;
    filter: drop-shadow(0px 0px 1px blue);

    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
  }

  button {
    width: 120px;
    height: 45px;
    background-color: #ff781d; 
    margin-right: -20px;
    border-radius: 10px;
    :hover {
      transition: 0.1s;
      background-color: #ffa940;
    }
`;
export const DivRating = styled.div`
  display: flex;
  width: 15rem;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
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

  img {
    margin: 8px;
  }
`;
export const Card = styled.div`
  width: 350px;
  height: 220px;
  background-color: #ffff;
  border: 1px solid var(--cor-complementar-3);
  color: #00000;
  margin: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  :hover {
    border: 3px solid var(--cor-complementar-3);
    color: #00000;
    filter: drop-shadow(0px 0px 4px white);
  }
  img {
    margin-top: 8px;
    margin-left: 0px;
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
    color: #1d1f1e;
  }
  h1 {
    text-align: center;
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
    text-align: center;

    filter: drop-shadow(0px 0px 5px blue);
  }
  h3 {
    font-size: 14px;
  }
  h4 {
    margin-top: 20px;
  }
`;

export const DivCard = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
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
    background-color: red;
    border-width: 5px;
    border-color: red;
  }
`;
