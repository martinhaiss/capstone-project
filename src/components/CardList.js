import ActivityCard from "./Card";
import styled from "styled-components/macro";
import { useState } from "react";
import saveToLocal from "../lib/saveToLocal";

function CardList({ activities, onJoin }) {
  function handleJoinButtonClick(id) {
    const newActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, joined: !activity.joined };
      }
      return activity;
    });

    onJoin(newActivities);
    console.log(newActivities);
  }

  const joined = useState(() => {});

  return (
    <Content>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          icon={activity.icon}
          name={activity.name}
          route={activity.route}
          date={activity.date}
          time={activity.time}
          distance={activity.distance}
          duration={activity.duration}
          postalcode={activity.postalcode}
          city={activity.city}
          street={activity.street}
          info={activity.info}
          joined={activity.joined}
          onJoinButtonClick={() => handleJoinButtonClick(activity.id)}
          isJoined={joined.indexOf(activity.name) > -1}
        />
      ))}
    </Content>
  );
}

export default CardList;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
