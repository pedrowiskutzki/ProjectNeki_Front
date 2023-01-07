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
    height: 100px;
    display: flex;
    align-items: center;
    margin:1rem;
    flex-direction: row;
    justify-content: space-evenly;

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

    button{
        width: 120px;
        height: 45px;
        margin-right: -20px ;
        border-radius: 10px;
    }
`
export const CardSkills = styled.div `
    width: 85%;
    height: auto;
    background-color: var(--cor-complementar-2);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border-radius: 20px;

    @media screen and (max-width: 768px){
        flex-direction: column;  
        align-items: center;  
    }
`
export const Card = styled.div `
    width: 200px;
    height: 280px;
    background-color: black;
    border: 2px solid var(--cor-complementar-3);
    color: white;
    margin: 0.9rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;

    :hover{
        border: 4px solid var(--cor-complementar-3);
        background-color: var(--cor-complementar-4);
        color: black;
    }

    div{
        display: flex;
        flex-direction: row;
    }

    button{
    width: 80px;
    height: 35px;
    border-radius: 1rem;
    background-color: #EB4A40;

    :hover{
        background-color: #EB0201;
    }
    }

    p{
        font-size: 13px;
    }
    h2{
        font-size: 17px;
    }
    h3{
        font-size: 12px;
    }
`
