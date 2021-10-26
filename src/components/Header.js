import styled from "styled-components/macro";

function Header() {
  return <HeaderBox></HeaderBox>;
}
/*
function Header() {
  return (
    <HeaderBox>
      <Button onClick={() => {}}>avaiable activities</Button>
      <Button onClick={() => {}}>joined activities</Button>
    </HeaderBox>
  );
}
*/

//const HeaderBox = styled.div`
//  display: flex;
//  justify-content: space-evenly;

//  background-color: lightslategray;
//  opacity: 0.5;
//`;

// const Container = styled.div`
//  display: flex;
//  margin: 10px;
//  justify-content: center;
//  gap: 25px;
//`;

const HeaderBox = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  gap: 25px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  margin: 0.5rem;
  background-color: lightsteelblue;
  color: white;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.2);
  &:active {
    background-color: steelblue;
  }
`;

export default Header;
