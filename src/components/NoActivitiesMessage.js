import styled from "styled-components/macro";

function NoActivitiesMessage() {
  return (
    <Wrapper>
      <h3>No activities joined so far</h3>
      <p>Look for suitable activities and collab!</p>
      <IMG src="./img/collab.png" />
    </Wrapper>
  );
}

export default NoActivitiesMessage;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const IMG = styled.img`
  margin-top: 20px;
  width: 300px;
  height: auto;
`;
