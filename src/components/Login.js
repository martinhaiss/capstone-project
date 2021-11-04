import collabLogo from "../img/collab-logo.png";
import styled from "styled-components/macro";
import saveToLocal from "../lib/saveToLocal";

function Login({ onHandleSetUsername }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { username } = form.elements;
    saveToLocal("user", username.value);
    onHandleSetUsername(username.value);
  }

  return (
    <Wrapper>
      <img src={collabLogo} alt="welcome to collab" />
      <Form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Label>username </Label>
        <Input
          type="text"
          name="username"
          id="name"
          autoComplete="off"
          placeholder="Username"
          required
        />

        <Label>password </Label>
        <Input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Password"
          required
        />

        <Button>Login</Button>
      </Form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30% auto 0 auto;
  max-width: 500px;
  gap: 10px;
  }
  img {
    width: 80%;
    margin-bottom: 0 auto;
    border-radius: 7px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
`;

const Label = styled.label`
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`;

const Input = styled.input`
  padding: 10px 30px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 20px #dedede;
`;

const Button = styled.button`
  background-color: #9dadbc;
  border: none;
  padding: 10px;
  width: 60%;
  align-self: center;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  margin-top: 10px;
`;
