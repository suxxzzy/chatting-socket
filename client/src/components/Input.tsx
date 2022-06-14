import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  border-bottom: 1px solid #bdbdbd;

  > div {
    font-weight: bold;
  }
  > input {
    width: 300px;
    height: 30px;
    font-size: 1.3rem;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

type Props = {
  children: string;
  password?: boolean;
};

//입력할 내용에 따라서, 라벨 이름, 유효성 검사 항목이 달라짐
function Input({ children, password }: Props) {
  return (
    <Container>
      <div>{children}</div>
      <input type={password ? "password" : "text"}></input>
    </Container>
  );
}

export default Input;
