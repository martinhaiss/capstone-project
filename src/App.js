import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { useState } from "react";
import loadFromLocal from "./lib/loadFromLocal";

function App({ data }) {
  //const [activities, setActivities] = useState(data);

  // --- 1.Versuch ----

  // const [activities, setActivities] = useState(() => {
  //   if (!loadFromLocal("localActivities")) {
  //     saveToLocal("localActivities", data);
  //   }
  //   return loadFromLocal("localActivities");
  // });

  // --- 2. Versuch

  const [activities, setActivities] = useState(
    loadFromLocal(`localActivities`) ?? data
  );

  return (
    <Router>
      <Switch>
        <Container>
          <Route exact path="/">
            <CardList
              activities={activities}
              onJoin={(newActivities) => setActivities(newActivities)}
            />
          </Route>

          <Route exact path="/joined">
            <CardList
              activities={activities.filter(
                (activity) => activity.joined === true
              )}
            />
          </Route>

          <Route exact path="/cycling">
            <CardList
              activities={activities.filter(
                (activity) =>
                  activity.discipline === "cycling" && activity.joined === false
              )}
            />
          </Route>

          <Route exact path="/running">
            <CardList
              activities={activities.filter(
                (activity) =>
                  activity.discipline === "running" && activity.joined === false
              )}
            />
          </Route>

          <Footer />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 0.125fr;
`;
