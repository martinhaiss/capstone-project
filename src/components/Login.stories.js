import Login from "./Login";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  setUsername: action((user) => console.log(user)),
};
