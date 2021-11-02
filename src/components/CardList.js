import ActivityCard from "./Card";
import styled from "styled-components/macro";
import NoActivitiesMessage from "./NoActivitiesMessage";

function CardList({ activities, onJoin, onDeleteButtonClick }) {
  if (!activities.length) {
    return <NoActivitiesMessage />;
  }
  return (
    <Content>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          discipline={activity.discipline}
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
          onJoinButtonClick={() => onJoin(activity.id)}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      ))}
    </Content>
  );
}

export default CardList;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
