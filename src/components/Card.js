import styled, { css } from "styled-components";
import runningIcon from "./img/running.png";
import cyclingIcon from "./img/cycling.png";

const Sport = ({ sport }) => (
  <img src={"Running" ? runningIcon : cyclingIcon} />
);

function ActivityCard({ sport, name, route, date, time, distance, duration }) {
  return (
    <Wrapper>
      <StyledCardTitle>
        <Icon src={sport} />
        <Spacer />
        <p>{name}</p>
      </StyledCardTitle>

      <Img src={route} />

      <StyledDateTime>
        <p>Date: {date}</p>
        <VerticalLine />
        <p>Time: {time}</p>
      </StyledDateTime>
      <HorizontalLine />
      <StyledDistanceDuration>
        <p>Distance: {distance}</p>
        <VerticalLine />
        <p>Duration: {duration}</p>
      </StyledDistanceDuration>
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

const StyledCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Spacer = styled.div`
  width: 10px;
`;

const Img = styled.img`
  diplay: flex;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledDateTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledDistanceDuration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const VerticalLine = styled.div`
  border-left: thin solid #000000;
  margin-top: 10px;
  margin-left: 20px;
  margin-right:20px
  margin-top: 10px;
`;

export default ActivityCard;
