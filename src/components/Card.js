import styled from "styled-components";

function ActivityCard({ sport, name, route, date, time, distance, duration }) {
  return (
    <Wrapper>
      <CardTitle>
        <Icon src={sport} />
        <Spacer />
        <p>{name}</p>
      </CardTitle>
      <MapImg src={route} alt="img of map with route" />
      <DateTime>
        <p>Date: {date}</p>
        <VerticalLine />
        <p>Time: {time}</p>
      </DateTime>
      <HorizontalLine />
      <DistanceDuration>
        <p>Distance: {distance}</p>
        <VerticalLine />
        <p>Duration: {duration}</p>
      </DistanceDuration>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 0px solid #aaa;
  margin: 15px;
  padding: 15px;
  border-radius: 13px;
  box-shadow: 0px 0px 20px #dedede;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  height: 18px;
  width: auto;
  margin-top: 14px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Spacer = styled.div`
  width: 10px;
`;

const MapImg = styled.img`
  display: flex;
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DateTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HorizontalLine = styled.hr`
  width: 90%;
`;

const DistanceDuration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const VerticalLine = styled.div`
  border-left: thin solid #000000;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
`;

export default ActivityCard;
