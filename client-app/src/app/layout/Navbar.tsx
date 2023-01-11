import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={NavLink} to="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
          <Menu.Item as={NavLink} to="/activities" name="Activities" />
          <Menu.Item>
            <Button
              positive
              content="Create Activity"
              as={NavLink}
              to="/createActivity"
            />
          </Menu.Item>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
