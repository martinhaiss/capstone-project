import React from "react";
import Card from "./Card";

export default {
  title: "Component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Activity = Template.bind({});
Activity.args = {
  sport: "./img/running.png",
  name: "Schnelle Abendrunde Richtung Jenischpark",
  route: "./img/map-placeholder.png",
  date: "05.11.2021",
  time: "18:15 Uhr ",
  distance: "14 km",
  duration: "1:00 h",
};
