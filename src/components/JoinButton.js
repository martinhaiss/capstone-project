import styled from "styled-components/macro";

const JoinButton = ({ isJoined, toggleJoin }) => {
  const handleJoin = () => {
    toggleJoin();
  };

  return (
    <StyledJoinButton isJoined={isJoined} onClick={handleJoin}>
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
  border-radius: 10px 10px 10px 10px;
  background-color: ${({ isJoined }) => (isJoined ? "#eb6965" : "#5cd160")};
`;
export default JoinButton;
