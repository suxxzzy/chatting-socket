import styled from "styled-components";

const Intro = styled.section`
  flex: 2;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    font-size: 4.5rem;
    font-weight: bold;
  }
`;

function Introtext() {
  return (
    <Intro>
      <div>반가워요,</div>
      <div>랜챗!</div>
    </Intro>
  );
}

export default Introtext;
