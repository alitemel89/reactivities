import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" />
          Reactivities
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button positive content="Create Activity"/>
          </Menu.Item>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;