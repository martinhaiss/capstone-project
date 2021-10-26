import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateActivity({ onCreateActivity }) {
  const [charCount, setCharCount] = useState(0);
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
        <input type="text" name="name" required autoComplete="Off" />
      </Label>

      <Label>
        Upload Route
        <input
          type="url"
          name="route"
          placeholder="The url of your map-image"
        ></input>
      </Label>

      <Label>
        Date
        <input type="date" name="date" required />
      </Label>

      <Label>
        Start-Time
        <input type="time" name="time" required />
      </Label>

      <Label>
        Distance
        <input type="number" name="distance" required autoComplete="Off" />
      </Label>

      <Label>
        Duration
        <input type="number" name="duration" required autoComplete="Off" />
      </Label>

      <Label>
        Postal Code
        <input type="number" name="postalcode" required autoComplete="Off" />
      </Label>

      <Label>
        City
        <input type="text" name="city" required autoComplete="Off" />
      </Label>

      <Label>
        Start-Point
        <input
          type="text"
          name="street"
          placeholder="Enter street and housenumber"
          required
          autoComplete="Off"
        />
      </Label>

      <Label>
        Info
        <textarea
          name="info"
          placeholder="max 140 characters"
          required
          autoComplete="Off"
          rows="4"
          maxLength="140"
          onChange={(event) => setCharCount(event.target.value.length)}
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
  gap: 1rem;
`;

const RadioButtons = styled.div`
  display: flex;
  gap: 6rem;
  justify-content: flex-start;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
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
