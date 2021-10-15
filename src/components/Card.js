import styled from "styled-components/macro";
import { useState } from "react";
import JoinButton from "./JoinButton";

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
  const [isJoined, setIsJoined] = useState(false);
  const toggleJoin = () => {
    setIsJoined(!isJoined);
  };
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
        <p>Date: {date}</p>
        <p>Start: {time}</p>
      </DateTime>
      <HorizontalLine />
      <DistanceDuration>
        <p>Distance: {distance}</p>
        <p>Duration: {duration}</p>
      </DistanceDuration>
      <HorizontalLine />

      {showDetails ? (
        <div>
          <Details>
            <Meet>Meeting Point</Meet>
            <Address>
              <div>{street}</div>
              {postalcode} {city}
            </Address>
            <JoinButton toggleJoin={toggleJoin} isJoined={isJoined} />
            <Info>{info}</Info>
          </Details>
        </div>
      ) : null}
      <ShowMore>
        <MoreButton onClick={handleDetailsButtonClick}>
          {showDetails ? "LESS" : "MORE"}
        </MoreButton>
      </ShowMore>
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
  p {
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    text-align: center;
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 0.1fr 2fr;
`;

const Icon = styled.img`
  height: 18px;
  width: auto;
  margin-top: -5px;
  grid-column: 1 / 2;
`;

const Name = styled.p`
  grid-column: 2 / 3;
  margin-left: 10px;
  margin-top: -5px;
  border: none !important;
  padding: 0px !important;
  text-align: left !important;
`;

const MapImg = styled.img`
  border-radius: 2%;
  width: 100%;
  height: auto;
`;

const DateTime = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DistanceDuration = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Details = styled.div`
  display: grid;
  grid-template-areas:
    "headline"
    "street"
    "city"
    "button"
    "info";
`;

const Meet = styled.h3`
  grid-area: headline;
  font-size: medium;
  margin: 10px;
  padding: 10px;
`;

const Address = styled.p`
  margin-left: 40px;
  margin-right: 20px;
  grid-area: street;
`;

const Info = styled.p`
  grid-area: info;
  margin-left: 40px;
  margin-right: 20px;
`;

const HorizontalLine = styled.hr`
  width: 95%;
`;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
`;

const MoreButton = styled.button`
  background-color: #b4e9f5;
  border: none;
  padding: 10px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin-top: 10px;
  border-radius: 10px;
`;

export default ActivityCard;
