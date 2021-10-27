import React from "react";
import CreateActivity from "./CreateActivity";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/CreateActivity",
  component: CreateActivity,
};

const Template = (args) => <CreateActivity {...args} />;

export const Form = Template.bind({});
Form.args = {
  onCreateActivty: action((add) => console.log(add)),
};
