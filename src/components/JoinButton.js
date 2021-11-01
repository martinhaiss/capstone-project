import styled from "styled-components/macro";

const JoinButton = ({ id, isJoined, toggleJoin }) => {
  return (
    <StyledJoinButton id={id} isJoined={isJoined} onClick={toggleJoin}>
      {isJoined ? "WITHDRAW" : "JOIN ACTIVITY"}
    </StyledJoinButton>
  );
};

const StyledJoinButton = styled.button`
  grid-area: button;
  border: none;
  padding: 10px 60px;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  color: ${({ isJoined }) => (isJoined ? "#FF7869" : "#3EC08D")};
  background-color: #575859;
`;
export default JoinButton;
