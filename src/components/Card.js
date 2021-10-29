import styled from "styled-components/macro";
import { useState } from "react";
import JoinButton from "./JoinButton";
import { VscTrash } from "react-icons/vsc";

function ActivityCard({
  id,
  discipline,
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
  onJoinButtonClick,
  onDeleteButtonClick,
  joined,
}) {
  const [showDetails, setshowDetails] = useState(false);
  const handleDetailsButtonClick = () => {
    setshowDetails(!showDetails);
  };
  return (
    <Wrapper>
      <Header>
        <Icon
          src={
            discipline === "cycling" ? "./img/cycling.png" : "./img/running.png"
          }
          alt="kind of sport"
        />
        <Name>{name}</Name>
        <DeleteButton
          onClick={() => {
            onDeleteButtonClick(id);
          }}
        >
          <VscTrash style={{ width: "20", height: "20" }} aria-label="home" />
        </DeleteButton>
      </Header>
      <MapImg
        src={route === "" ? "./img/placeholder.jpg" : route}
        alt="map with route"
      />
      <DateTime>
        <p>Date: {date}</p>
        <p>Start: {time}</p>
      </DateTime>
      <HorizontalLine />
      <DistanceDuration>
        <p>Distance: {distance} km</p>
        <p>Duration: {duration} h</p>
      </DistanceDuration>
      <HorizontalLine />

      {showDetails ? (
        <div>
          <Details>
            <Meet>Meeting Point</Meet>
            <Address>
              <span style={{ display: "block" }}>{street}</span>
              {postalcode} {city}
            </Address>
            <JoinButton
              id={id}
              toggleJoin={onJoinButtonClick}
              isJoined={joined}
            />
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

export default ActivityCard;

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
  grid-template-columns: 0.1fr 2fr 0.1fr;
`;

const Icon = styled.img`
  height: 18px;
  width: auto;
  margin-top: -5px;
  grid-column: 1 / 2;
`;

const DeleteButton = styled.button`
  color: black;
  grid-column: 3 / 4;
  border: none;
  margin-top: -15px;
  background: transparent;
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
  grid-area: street;
  margin: 0px 30px 5px;
`;

const Info = styled.p`
  grid-area: info;
  margin: 5px 30px 5px;
`;

const HorizontalLine = styled.hr`
  width: 95%;
`;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
`;

const MoreButton = styled.button`
  background-color: #bde3f2;
  border: none;
  padding: 10px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin-top: 10px;
  border-radius: 10px;
`;
