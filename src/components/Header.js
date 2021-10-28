import styled from "styled-components/macro";
import loadFromLocal from "../lib/loadFromLocal";

const user = loadFromLocal("user");

function Header() {
  return (
    <Wrapper>
      <p>Hello {user}, here are some activities for you.</p>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: #e9f2ea;
  p {
    font-size: 13px;
    margin-left: 15px;
  }
`;
