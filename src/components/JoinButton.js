import styled from "styled-components/macro";

const JoinButton = ({ id, isJoined, toggleJoin }) => {
  return (
    <StyledJoinButton id={id} isJoined={isJoined} onClick={toggleJoin}>
      {isJoined ? "CANCEL" : "COLLAB"}
    </StyledJoinButton>
  );
};

const StyledJoinButton = styled.button`
  grid-area: button;
  border: none;
  padding: 10px 60px;
  text-decoration: none;
  margin: 0 auto;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: ${({ isJoined }) => (isJoined ? "#FF7869" : "#3EC08D")};
  background-color: #575859;
`;
export default JoinButton;
