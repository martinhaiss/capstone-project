import collabLogo from "../img/collab-logo.png";
import styled from "styled-components/macro";
import saveToLocal from "../lib/saveToLocal";

function Login({ onHandleSetUsername }) {
  function handleSubmit(loginEvent) {
    loginEvent.preventDefault();
    const form = loginEvent.target;
    const { username } = form.elements;
    saveToLocal("user", username.value);
    onHandleSetUsername(username.value);
  }

  return (
    <Wrapper>
      <img src={collabLogo} alt="" />
      <h1>Welcome to Collab</h1>
      <Form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Input
          type="text"
          name="username"
          id="name"
          autoComplete="off"
          placeholder="Username"
          required
        />
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
  h1 {
    font-size: 40px;
    text-align: center;
  }
  img {
    width: 90%;
    margin: 0 auto;
    border-radius: 7px;
    box-shadow: 0px 0px 20px #dedede;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const Input = styled.input`
  padding: 10px 30px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 20px #dedede;
`;

const Button = styled.button`
  background-color: #bde3f2;
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
