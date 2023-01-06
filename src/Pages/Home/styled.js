import styled from "styled-components";
 
export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: var(--cor-primaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
`
export const Title = styled.div `
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;

    @media screen and (max-width: 768px){
        width: 4.5;
        height: 10vh;
    }
    
    h1{
        font-size: 50px;
        color: var(--cor-complementar-4);
        border-bottom: 3px solid var(--cor-complementar-4);

        @media screen and (max-width: 768px){
            font-size: 35px;
            
    }
    }
`
export const CardSkills = styled.div `
    width: 85%;
    height: 60vh;
    background-color: var(--cor-complementar-2);
    display: flex;
    flex-direction: row;
    border-radius: 20px;
`