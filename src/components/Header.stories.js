import Header from "./Header";
import { action } from "@storybook/addon-actions";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Form = Template.bind({});
Form.args = {
  onHeader: action((add) => console.log(add)),
};
