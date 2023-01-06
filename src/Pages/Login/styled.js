import styled from "styled-components";
 
export const DivContainer = styled.div `
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: var(--cor-primaria);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
   
`

export const Formulario = styled.form `
height: 21.5rem;
width: 20rem;
display: flex;
align-items: center;
flex-direction: column;
background-color: var(--cor-primaria);
border: 2px solid var(--cor-complementar-3);
border-radius: 0.8rem;
box-shadow: inset 15px 15px 42px #111127,
            inset -25px -25px 52px #252353;

 button {
 margin-top: 1.5rem;
 padding: 0.8em 1.8em;
 border: 2px solid var(--cor-complementar-1);
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: var(--cor-complementar-4);
}

button::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: var(--cor-complementar-1);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover {
 color: #111;
}

button:hover::before {
 width: 155%;
}

label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1.4rem;

}

.inputArea {
    flex-direction: row;
    width: '90%';
}
.icon {
    width: '15%';
    height: 50;
    justify-content: 'center';
    align-items: 'center';
    
}
p{
    color:white,
}

input {
 margin-top: 1.5rem;
 line-height: 32px;
 border: 2px solid transparent;
 background-color: transparent;
 color: #F7F7F7;
 border-bottom-color: #F7F7F7;
 padding: .2rem 0;
 outline: none;
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

input:focus, input:hover {
 outline: none;
 padding: .2rem 1rem;
 border-radius: 1rem;
 border-color: #F6F6F6;
}

input::placeholder {
 color: #F6F6F6;
 
}

input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}

`
