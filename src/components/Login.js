import collabLogo from "../img/collab-logo.png";
import styled from "styled-components/macro";
import saveToLocal from "../lib/saveToLocal";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  function handleSubmit(loginEvent) {
    loginEvent.preventDefault();
    const form = loginEvent.target;
    const { username } = form.elements;
    saveToLocal("user", username.value);
    history.push("/home");
  }

  return (
    <Wrapper>
      <img src={collabLogo} alt="collab" />
      <h1>Welcome to Collab</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Input
          type="text"
          name="username"
          id="name"
          autoComplete="off"
          placeholder="Please enter your name"
          required
        />
        <Button>Login</Button>
      </form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30% auto 0 auto;
  max-width: 75%;
  h1 {
    font-size: 40px;
    text-align: center;
  }
  img {
    width: 100%;
    margin: 0 auto;
    border-radius: 7px;
    box-shadow: 0px 0px 20px #dedede;
  }
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
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  margin-top: 10px;
`;
