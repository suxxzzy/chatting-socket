import { useState } from "react";
import styled from "styled-components";
import Profile from "./ProfileImg";
import Input from "./Input";
import Button from "./Button";
import SocialLogin from "./SocialLogin";

const Container = styled.section`
  /* border: 1px solid black; */
  flex: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span {
    font-size: 0.9rem;
    > span {
      color: #03b6fc;
      text-decoration: underline;
    }
  }
`;

function Login() {
  const [isMember, setIsMember] = useState(true);
  const handleClick = () => {
    setIsMember(!isMember);
  };
  return (
    <Container>
      {isMember ? (
        <>
          <Input>Email</Input>
          <Input password={true}>Password</Input>
          <Button>로그인</Button>
          <SocialLogin />
          <span>
            아직 회원이 아니신가요?<span onClick={handleClick}>회원가입</span>
          </span>
        </>
      ) : (
        <>
          <Profile />
          <Input>Email</Input>
          <Input>Nickname</Input>
          <Input password={true}>Password</Input>
          <Input password={true}>Retype</Input>
          <Button>회원가입</Button>
          <span>
            이미 회원이신가요?<span onClick={handleClick}>로그인</span>
          </span>

          <SocialLogin />
        </>
      )}
    </Container>
  );
}

export default Login;
