import ActivityCard from "./Card";
import activityData from "./data.json";
import styled from "styled-components";

function CardList({}) {
  return (
    <Wrapper role="main">
      {activityData.map((activity) => (
        <ActivityCard
          sport={activity.sport}
          name={activity.name}
          route={activity.route}
          date={activity.date}
          time={activity.time}
          distance={activity.distance}
          duration={activity.duration}
          key={activity.name}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default CardList;
