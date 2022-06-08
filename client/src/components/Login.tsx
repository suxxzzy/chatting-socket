import { useState } from "react";
import styled from "styled-components";
import SocialLogin from "./SocialLogin";

const Container = styled.section`
  flex: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login() {
  return (
    <Container>
      <SocialLogin />
      <span>아직 회원이 아니신가요?</span>
      <span>회원가입</span>
    </Container>
  );
}

export default Login;
