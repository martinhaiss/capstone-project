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
  max-width: 500px;
  height: 98vh;
  grid-template-rows: 0.125fr 1fr 0.075fr;
  gap: 5px 0;
`;

export default App;
