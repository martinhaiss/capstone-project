import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { useState } from "react";
import loadFromLocal from "./lib/loadFromLocal";
import saveToLocal from "./lib/saveToLocal";

function App({ data }) {
  const [activities, setActivities] = useState(
    loadFromLocal(`localActivities`) ?? data
  );

  function handleJoin(id) {
    const newActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, joined: !activity.joined };
      }
      return activity;
    });

    setActivities(newActivities);
    saveToLocal("localActivities", newActivities);
  }

  return (
    <Router>
      <Switch>
        <Container>
          <Route exact path="/">
            <CardList onJoin={handleJoin} activities={activities} />
          </Route>

          <Route exact path="/joined">
            <CardList
              onJoin={handleJoin}
              activities={activities.filter(
                (activity) => activity.joined === true
              )}
            />
          </Route>

          <Route exact path="/cycling">
            <CardList
              onJoin={handleJoin}
              activities={activities.filter(
                (activity) =>
                  activity.discipline === "cycling" && activity.joined === false
              )}
            />
          </Route>

          <Route exact path="/running">
            <CardList
              onJoin={handleJoin}
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
