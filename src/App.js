import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import CreateActivity from "./components/CreateActivity";
import { useState } from "react";
import loadFromLocal from "./lib/loadFromLocal";
import saveToLocal from "./lib/saveToLocal";

function App({ data }) {
  const [activities, setActivities] = useState(
    loadFromLocal("localActivities") ?? data
  );

  const [username, setUsername] = useState(loadFromLocal("user") ?? "");
  function handleSetUsername(value) {
    setUsername(value);
  }

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

  function handleCreateActivity(newActivity) {
    const newActivities = [newActivity, ...activities];
    setActivities(newActivities);
    saveToLocal("localActivities", newActivities);
  }
  //------------Delete Button -----------------

  function handleDeleteButton(id) {
    const filteredActivites = activities.filter(
      (activity) => activity.id !== id
    );

    setActivities(filteredActivites);
    saveToLocal("localActivities", filteredActivites);
  }

  //------------------------------------------------
  return (
    <Router>
      <Container>
        <Route
          exact
          path={["/home", "/joined", "/cycling", "/running", "/create"]}
        >
          <Header />
        </Route>
        <Switch>
          <Route exact path="/">
            {username ? (
              <Redirect to="/home" />
            ) : (
              <Login onHandleSetUsername={handleSetUsername} />
            )}
          </Route>
          <Route exact path="/home">
            {username ? (
              <CardList
                onJoin={handleJoin}
                activities={activities}
                onDeleteButtonClick={handleDeleteButton}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/joined">
            {username ? (
              <CardList
                onJoin={handleJoin}
                onDeleteButtonClick={handleDeleteButton}
                activities={activities.filter(
                  (activity) => activity.joined === true
                )}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route exact path="/cycling">
            {username ? (
              <CardList
                onJoin={handleJoin}
                onDeleteButtonClick={handleDeleteButton}
                activities={activities.filter(
                  (activity) =>
                    activity.discipline === "cycling" &&
                    activity.joined === false
                )}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route exact path="/running">
            {username ? (
              <CardList
                onJoin={handleJoin}
                onDeleteButtonClick={handleDeleteButton}
                activities={activities.filter(
                  (activity) =>
                    activity.discipline === "running" &&
                    activity.joined === false
                )}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/create">
            {username ? (
              <CreateActivity onCreateActivity={handleCreateActivity} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>

        <Route
          exact
          path={["/home", "/joined", "/cycling", "/running", "/create"]}
        >
          <Footer />
        </Route>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.125fr 2fr 0.125fr;
`;
