import styled from "styled-components/macro";
import { useState } from "react";

function ActivityCard({
  sport,
  name,
  route,
  date,
  time,
  distance,
  duration,
  postalcode,
  city,
  street,
  info,
}) {
  const [showDetails, setshowDetails] = useState(false);

  const handleDetailsButtonClick = () => {
    setshowDetails(!showDetails);
  };

  return (
    <Wrapper>
      <Header>
        <Icon src={sport} />
        <Name>{name}</Name>
      </Header>
      <MapImg src={route} alt="img of map with route" />
      <DateTime>
        <Date>Date: {date}</Date>
        <VerticalLine />
        <Time>Start: {time}</Time>
      </DateTime>
      <HorizontalLine />
      <DistanceDuration>
        <Distance>Distance: {distance}</Distance>
        <VerticalLine />
        <Duration>Duration: {duration}</Duration>
      </DistanceDuration>
      <HorizontalLine />

      {showDetails ? (
        <div>
          <Address>
            <Meet>Meeting Point</Meet>
            <Street>{street}</Street>
            <City>
              {postalcode} {city}
            </City>
            <Info>{info}</Info>
          </Address>
        </div>
      ) : null}
      <ShowAndJoin>
        <ButtonMore onClick={handleDetailsButtonClick}>
          {showDetails ? "less" : "more"}
        </ButtonMore>
      </ShowAndJoin>
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

const Header = styled.header`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.2fr 1.4fr 1.4fr;
`;

const Icon = styled.img`
  height: 18px;
  width: auto;
  margin-top: 14px;
  grid-column: 1 / 2;
`;

const Name = styled.p`
  grid-column: 2 / 4;
`;

const MapImg = styled.img`
  border-radius: 2%;
  width: 100%;
  height: auto;
`;

const DateTime = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr 1fr 1fr 0.5fr;
`;

const Date = styled.p`
  grid-column: 2 / 4;
`;

const Time = styled.p`
  grid-column: 5 / 7;
`;

const DistanceDuration = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr 1fr 1fr 0.5fr;
`;

const Distance = styled.p`
  grid-column: 2 / 4;
`;

const Duration = styled.p`
  grid-column: 5 / 7;
`;

const Address = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 1fr;
`;

const Meet = styled.h3`
  font-size: medium;
  grid-column: 2 / 7;
  grid-row: 1 / 2;
`;

const Street = styled.p`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
`;

const City = styled.p`
  grid-column: 5 / 7;
  grid-row: 2 / 3;
`;

const Info = styled.p`
  grid-column: 2 / 7;
  grid-row: 3 / 5;
`;

const HorizontalLine = styled.hr`
  width: 90%;
`;

const VerticalLine = styled.div`
  border-left: thin solid #000000;
  margin-top: 10px;
`;

const ShowAndJoin = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const ButtonMore = styled.button`
  grid-column: 3 / 5;
  background-color: #b4e9f5;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px 10px 10px 10px;
`;

export default ActivityCard;
