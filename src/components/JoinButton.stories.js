import JoinButton from "./JoinButton";

export default {
  title: "JoinButton",
  component: JoinButton,
};
const Template = (args) => <JoinButton {...args} />;

export const unclickedJoinButton = Template.bind({});
unclickedJoinButton.args = {
  name: "Zum Deich den Schafen gute Nacht sagen",
  id: 1,
  isJoined: false,
};
export const activeJoinButton = Template.bind({});
activeJoinButton.args = {
  name: "Zum Deich den Schafen gute Nacht sagen",
  id: 1,
  isJoined: true,
};
