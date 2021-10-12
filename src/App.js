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
  max-width: 450px;
  margin: auto;
  height: 98vh;
`;

export default App;
