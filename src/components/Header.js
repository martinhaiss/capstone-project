import styled from "styled-components/macro";
import loadFromLocal from "../lib/loadFromLocal";
import SearchBar from "./SearchBar";

function Header({ searchTerm, onChange }) {
  const user = loadFromLocal("user");

  return (
    <Wrapper>
      <p>Hello, {user}!</p>
      <SearchBar searchTerm={searchTerm} onChange={onChange} />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #575859;
  p {
    font-size: 13px;
    margin-left: 10px;
    margin-top: 17px;
    color: white;
  }
`;
