import styled from "styled-components/macro";
import { useState } from "react";
import JoinButton from "./JoinButton";
import { VscTrash as DeleteIcon } from "react-icons/vsc";

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
  const handleDetailsClick = () => {
    setshowDetails(!showDetails);
  };
  return (
    <Wrapper>
      <ClickArena onClick={handleDetailsClick}>
        <Header>
          <Icon
            src={
              discipline === "cycling"
                ? "./img/directions_bike.svg"
                : "./img/directions_run.svg"
            }
            alt="kind of sport"
          />
          <Name>{name}</Name>
          <DeleteButton
            onClick={() => {
              onDeleteButtonClick(id);
            }}
          >
            <DeleteIcon
              style={{ width: "20", height: "20" }}
              aria-label="delete activity"
            />
          </DeleteButton>
        </Header>
        <MapImg
          src={route === "" ? "./img/maps/placeholder.jpg" : route}
          alt="map with route"
        />
        <DateTime>
          <p>Date: {date}</p>
          <p>Start: {time}</p>
        </DateTime>
        <DistanceDuration>
          <p>Distance: {distance} km</p>
          <p>Duration: {duration} h</p>
        </DistanceDuration>
      </ClickArena>

      {showDetails ? (
        <div>
          <HorizontalLine />
          <Details>
            <ClickArena onClick={handleDetailsClick}>
              <h3>Meeting Point</h3>
              <Address>
                <span style={{ display: "block" }}>{street}</span>
                {postalcode} {city}
              </Address>
              <h3>Info</h3>
              <Info>{info}</Info>
            </ClickArena>
            <JoinButton
              id={id}
              toggleJoin={onJoinButtonClick}
              isJoined={joined}
            />
          </Details>
        </div>
      ) : null}
    </Wrapper>
  );
}

export default ActivityCard;

const Wrapper = styled.article`
  background: whitesmoke;
  border: 0px solid #aaa;
  margin: 10px;
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
  h3 {
    grid-area: headline;
    font-size: medium;
    margin: 10px;
    padding: 10px;
  }
`;

const ClickArena = styled.div``;

const Header = styled.header`
  display: grid;
  grid-template-columns: 0.1fr 2fr 0.1fr;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
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
    "info"
    "button";
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
