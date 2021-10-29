import styled from "styled-components/macro";
import loadFromLocal from "../lib/loadFromLocal";

function Header() {
  const user = loadFromLocal("user");
  return (
    <Wrapper>
      <p>Hi, {user}. Here are some activities for you.</p>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: #e9f2ea;
  p {
    font-size: 13px;
    margin-left: 15px;
    padding: 2px;
  }
`;
