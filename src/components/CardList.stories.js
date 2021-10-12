import CardList from "./CardList";

export default {
  title: "Component/CardList",
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const Activities = Template.bind({});
Activities.args = {
  Activities: [
    {
      sport: "./img/running.png",
      name: "Schnelle Abendrunde Richtung Jenischpark",
      route: "./img/map-placeholder.png",
      date: "05.11.2021",
      time: "18:15 Uhr ",
      distance: "14 km",
      duration: "1:00 h",
    },

    {
      sport: "./img/cycling.png",
      name: "Deichrunde am Abend",
      route: "./img/map-placeholder-2.png",
      date: "06.11.2021",
      time: "17:30 Uhr",
      distance: "50 km",
      duration: "2:00 h",
    },
  ],
};
