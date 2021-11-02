import styled from "styled-components/macro";

function Message() {
  return (
    <Wrapper>
      <h3>You have no activities joined so far</h3>
      <p>Look for a suitable activity and hit the collab-button!</p>
    </Wrapper>
  );
}

export default Message;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;
