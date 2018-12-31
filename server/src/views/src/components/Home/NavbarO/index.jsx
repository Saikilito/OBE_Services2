import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse } from 'mdbreact';

import { NavItem as NavbarItem, NavUser } from './Parts';

class NavbarO extends Component {
  constructor(props) {
    super(props);
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
                <NavbarItem />
          
                {/* -- Dinamic Login Logo -- */}
                <NavbarNav right>
                  <NavUser type={this.props.type} logged={this.props.logged}/>
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

export default NavbarO;

