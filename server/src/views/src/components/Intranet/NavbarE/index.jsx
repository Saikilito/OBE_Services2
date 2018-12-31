import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse } from 'mdbreact';

import { NavbarItem, NavUser } from './Parts';

class NavbarE extends Component {
  constructor(props) {
    super();
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
  }

render() {
  return (
        <div id="Home">
          <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
            {/* -- Brand -- */}
            <NavbarBrand href="/">
              <strong className="h4 ml-5 mr-5"> O B E </strong>
            </NavbarBrand>
            {/* -- Collapse -- */}
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClickCollapse} />}
            <Collapse isOpen={this.state.collapse} navbar>
            {/* -- Items -- */}
              {/* -- Dinamic Item -- */}
                <NavbarItem 
                  userType={this.props.user.type}
                  />
              {/* -- Dinamic Login Logo -- */}
              <NavbarNav right>
                <NavUser 
                  userName={this.props.user.name}
                  />
                  {console.log("Navbar Render, User-props:",this.props.user.name)}
              </NavbarNav>
            </Collapse>
          </Navbar>
        </div>
  );

}
    onClickCollapse = (e) => {
      this.setState({
        collapse: !this.state.collapse,
      });
    }
}

export default NavbarE;

