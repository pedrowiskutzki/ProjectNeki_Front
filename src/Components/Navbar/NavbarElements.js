import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  background: var(--cor-secundaria); 
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);

`;

export const Button = styled.button `
    background:var(--cor-complementar-3);
    width: 70px;
    height: 50px;
    margin: 0.5rem;
    border-radius: 20px;
    &:Hover {
    background-color: red;
  }
`