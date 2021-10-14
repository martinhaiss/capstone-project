import ActivityCard from "./Card";
import activityData from "../data.json";

function CardList() {
  return (
    <main>
      {activityData.map((activity) => (
        <ActivityCard
          sport={activity.sport}
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
          key={activity.id}
        />
      ))}
    </main>
  );
}

export default CardList;
