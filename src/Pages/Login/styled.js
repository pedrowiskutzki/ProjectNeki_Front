import styled from "styled-components";
 
export const DivContainer = styled.body `
    width: 100%;
    height: 100vh;
    align-items: center;
    background-image: url(https://i.pinimg.com/originals/eb/82/fd/eb82fd6a7d83c0086c15e33e8b9ba657.jpg);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
   
`

export const Formulario = styled.form `
height: 21.5rem;
width: 24rem;
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

span{
    width: 100%;
    height: fit-content;
    
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
export const Icon = styled.div `
   margin-left: auto;
   width: fit-content;
   position: relative;
   right: 12px;
   bottom: 32px;
`