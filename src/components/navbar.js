import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

import { Location } from '@reach/router'

const NavBar = (props, location) => {
  return (
    <div>
      <Location>
        {({ location }) => {
          return (
            <Navbar color="dark" light expand="md">
              <div className={`logo align-middle pr-2 ${location.pathname === '/' ? 'underline text-white font-weight-bold' : ''}`}>
                <img src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/05/rick-and-morty-main-new-2-9192.jpg?quality=90&strip=all&zoom=1&resize=644%2C453&ssl=1" alt="" />
              </div>
              <NavbarBrand href="/">Rick and Morty Character Searcher</NavbarBrand>
                <Nav className="mr-auto" navbar>
                  <NavItem className={`mr-auto ${location.pathname === '/search/' ? 'underline text-white font-weight-bold' : ''}`}>
                    <NavLink href="/search/">Search</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/bistacos/pokedex">GitHub</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          )
        }}
      </Location>
    </div>
  );
}

export default NavBar;
