import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  MdHome,
  MdStar,
  MdDirectionsBike,
  MdDirectionsRun,
  MdPostAdd,
} from "react-icons/md";

const navRoutes = [
  {
    path: "/home",
    icon: <MdHome aria-label="home" />,
  },

  {
    path: "/joined",
    icon: <MdStar aria-label="joined-activities" />,
  },

  {
    path: "/cycling",
    icon: <MdDirectionsBike aria-label="cycling-activities" />,
  },
  {
    path: "/running",
    icon: <MdDirectionsRun aria-label="running-activities" />,
  },
  {
    path: "/create",
    icon: <MdPostAdd aria-label="create-activity" />,
  },
];

function Footer() {
  return (
    <Navigation>
      {navRoutes.map(({ path, icon }) => (
        <NavigationLink
          to={path}
          exact={true}
          key={path}
          activeClassName="is-active"
        >
          <IconContext.Provider
            value={{
              size: "2em",
            }}
          >
            {icon}
          </IconContext.Provider>
        </NavigationLink>
      ))}
    </Navigation>
  );
}

export default Footer;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #575859;
`;

const NavigationLink = styled(NavLink)`
  color: white;
  &.${(props) => props.activeClassName} {
    color: #f27649;
  }
`;
