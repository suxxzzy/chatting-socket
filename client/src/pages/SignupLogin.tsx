import Introtext from "../components/Introtext";
import Login from "../components/Login";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;

function SignupLogin() {
  return (
    <Container>
      <Introtext />
      <Login />
    </Container>
  );
}

export default SignupLogin;
