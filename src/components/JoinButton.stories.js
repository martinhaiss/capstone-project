import JoinButton from "./JoinButton";

export default {
  title: "Component/JoinButton",
  component: JoinButton,
};
const Template = (args) => <JoinButton {...args} />;

export const primaryJoinButton = Template.bind({});
primaryJoinButton.args = {
  name: "Zum Deich den Schafen gute Nacht sagen",
  isJoined: false,
};

export const secondaryJoinButton = Template.bind({});
secondaryJoinButton.args = {
  name: "Zum Deich den Schafen gute Nacht sagen",
  isJoined: true,
};
