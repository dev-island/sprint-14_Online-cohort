import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { Button } from "../styledComponents/Button";
import { ProfileContext } from "../context/Profile";
import Form from "./Form";

const Main = () => {
  const theme = useContext(ThemeContext);
  const profileData = useContext(ProfileContext);
  return (
    <Container>
      <h1>Hello {profileData.name}</h1>
      <Button onClick={theme.toggleTheme}>{theme.theme}</Button>
      <Form />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  flex: 1;
`;
