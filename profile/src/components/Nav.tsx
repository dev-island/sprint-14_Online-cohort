import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";

const Nav = () => {
  const theme = useContext(ThemeContext);
  console.log("THEME", theme);
  return (
    <Container color={theme.colors.text} background={theme.colors.background}>
      NAV
    </Container>
  );
};

export default Nav;

const Container = styled.div<{
  color: string;
  background: string;
}>`
  background-color: ${(props) => props.background};
  border: 1px solid #000;
  border-radius: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 50px;
  display: flex;
`;
