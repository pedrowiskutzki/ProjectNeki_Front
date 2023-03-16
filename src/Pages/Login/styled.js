import styled from "styled-components";

export const DivContainer = styled.body`
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
`;

export const Formulario = styled.form`
  height: 23.5rem;
  width: 24rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid var(--cor-complementar-3);

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  button {
    margin-top: 0.6rem;
    padding: 0.8em 1.8em;
    border: 2px solid var(--cor-complementar-3);
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.3s;
    z-index: 1;
    font-family: inherit;
    color: var(--cor-complementar-3);
  }

  button::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: var(--cor-complementar-1);
    transition: 0.5s ease;
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

  span {
    width: 100%;
    height: fit-content;
  }
  p {
    color: var(--cor-complementar-3);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  input {
    line-height: 32px;
    border: 2px solid transparent;
    background-color: transparent;
    color: white;
    border-bottom-color: var(--cor-complementar-3);
    padding: 0.2rem 0;
    outline: none;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  input:focus,
  input:hover {
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    border-color: var(--cor-complementar-3);
  }

  input::placeholder {
    color: #f6f6f6;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
export const Icon = styled.div`
  margin-left: auto;
  width: fit-content;
  position: relative;
  right: 12px;
  bottom: 32px;
`;

export const Checkbox = styled.input`
  margin: 0px;
  width: 20px;
  height: 20px;
`;
