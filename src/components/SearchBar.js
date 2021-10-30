import styled from "styled-components/macro";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchBar({ searchTerm, onChange }) {
  const [isToggled, setIsToggled] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    setIsToggled(!isToggled);
    history.push("/search");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <ScreenReaderInfo>Search bar</ScreenReaderInfo>
        <Input
          type="text"
          name="input"
          placeholder="Suche nach PLZ oder Stadt"
          isToggled={isToggled}
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
`;

const Input = styled.input`
  color: black;
  width: 300px;
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
