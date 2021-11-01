import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

function SearchBar({ searchTerm, onChange }) {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/search");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <ScreenReaderInfo>Search bar</ScreenReaderInfo>
        <Input
          type="text"
          name="input"
          placeholder=" Suche nach PLZ oder Stadt"
          autoComplete="off"
          value={searchTerm}
          onChange={onChange}
        />
      </label>
    </Form>
  );
}

export default SearchBar;

const Form = styled.form`
  margin-left: 15px;
  padding: 2px;
  height: 30px;
  margin-top: 4px;
`;

const Input = styled.input`
  color: black;
  width: 250px;
  height: 25px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin-top: 5px;
`;

const ScreenReaderInfo = styled.span`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`;
