import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
`;

function SocialLogin() {
  return (
    <List>
      <li>카카오</li>
      <li>네이버</li>
      <li>페이스북</li>
      <li>구글</li>
    </List>
  );
}

export default SocialLogin;
