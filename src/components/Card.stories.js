import React from "react";
import Card from "./Card";
// import map from "./img/map-placeholder.png";
// import running from "./img/running.png";

export default {
  title: "Component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Activity = Template.bind({});
Activity.args = {
  //  sport: running,
  name: "Schnelle Abendrunde Richtung Jenischpark",
  route: "./img/map-placeholder.png",
  date: "05.11.2021",
  time: "18:15 Uhr ",
  distance: "14 km",
  duration: "1:00 h",
};
