import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  background: #0f222e;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const Button = styled.button`
  background: #db3a2c;
  color: white;
  width: 100px;
  height: 45px;
  margin: 0.5rem;

  &:hover {
    background-color: red;
  }
`;
