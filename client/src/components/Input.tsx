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
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

type Props = {
  children: string;
};

//입력할 내용에 따라서, 라벨 이름, 유효성 검사 항목이 달라짐
function Input({ children }: Props) {
  return (
    <Container>
      <div>{children}</div>
      <input type="text"></input>
    </Container>
  );
}

export default Input;
