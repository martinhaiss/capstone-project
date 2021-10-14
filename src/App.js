import styled from "styled-components/macro";
import CardList from "./components/CardList";

function App() {
  return (
    <AppLayout>
      <CardList />
    </AppLayout>
  );
}

const AppLayout = styled.div`
  max-width: 600px;
  height: 98vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.125fr 1fr 0.075fr;
  grid-column-gap: 0px;
  grid-row-gap: 5px;
`;

export default App;
