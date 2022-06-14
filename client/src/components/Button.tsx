import styled from "styled-components";

const Btn = styled.button`
  border: none;
  width: 400px;
  height: 40px;
  margin: 20px 0px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

type Props = {
  children: string;
};

function Button({ children }: Props) {
  return <Btn>{children}</Btn>;
}

export default Button;
