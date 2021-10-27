import { nanoid } from "nanoid";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function CreateActivity({ onCreateActivity }) {
  const history = useHistory();
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <RadioButtons>
          <Label>
            Cycling
            <input type="radio" name="discipline" value="cycling" required />
          </Label>
          <Label>
            Running
            <input type="radio" name="discipline" value="running" required />
          </Label>
        </RadioButtons>
      </div>

      <Label>
        Name Of Your Activity
        <Input type="text" name="name" required autoComplete="Off" />
      </Label>

      <Label>
        Upload Route
        <Input type="url" name="route" placeholder="  url of your map-image" />
      </Label>

      <Label>
        Date
        <Input type="date" name="date" required />
      </Label>

      <Label>
        Start-Time
        <Input type="time" name="time" required />
      </Label>
      <Container>
        <Label>
          Distance
          <Input
            type="number"
            name="distance"
            placeholder="  (km)"
            required
            autoComplete="Off"
          />
        </Label>
        <Label>
          Duration
          <Input
            type="number"
            name="duration"
            placeholder="  (hours)"
            required
            autoComplete="Off"
          />
        </Label>
      </Container>
      <Label>
        Start-Point
        <Input
          type="text"
          name="street"
          placeholder="  street + housenumber or distinctive place"
          required
          autoComplete="Off"
        />
      </Label>
      <Container>
        <Label>
          Postal Code
          <Input type="number" name="postalcode" required autoComplete="Off" />
        </Label>
        <Label>
          City
          <Input type="text" name="city" required autoComplete="Off" />
        </Label>
      </Container>

      <Label>
        Info
        <Textarea
          name="info"
          placeholder=" max 140 characters"
          autoComplete="Off"
          rows="4"
          maxLength="140"
        />
      </Label>

      <Button>Submit</Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const {
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
    } = form.elements;

    onCreateActivity({
      id: nanoid(),
      discipline: discipline.value,
      name: name.value,
      route: route.value,
      date: date.value,
      time: time.value,
      distance: distance.value,
      duration: duration.value,
      postalcode: postalcode.value,
      city: city.value,
      street: street.value,
      info: info.value,
    });
    form.reset();
    history.push("/");
  }
}

const Form = styled.form`
  box-shadow: 0px 0px 20px #dedede;
  margin: 15px;
  padding: 15px;
  padding: 1.3rem;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 20px #dedede;
  margin-top: 5px;
  font-size: 15px;
`;

const RadioButtons = styled.div`
  display: flex;
  gap: 15%;
  justify-content: flex-start;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Textarea = styled.textarea`
  border-radius: 7px;
  box-shadow: 0px 0px 20px #dedede;
  border: none;
  margin-top: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const Button = styled.button`
  background-color: #bde3f2;
  border: none;
  padding: 10px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  margin-top: 10px;
`;
