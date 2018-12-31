import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, } from 'mdbreact';

import { NavbarItem, NavUser } from './Parts';

class NavbarT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      home: true,
      login: false,
    };
  }

  onClickLogin()
  {
    this.setState({
      home: false , login: true
    })  
  }

  onClickNavegator() {
    if (this.state.home) {
        return <NavbarItem />
    }
    else if (!this.state.home && this.state.login){
        return <NavbarNav left>
        <NavItem>
            <p className="nav-link mt-3">Ingrese y disfrute de los servicios OBE</p>
        </NavItem>
        </NavbarNav>
    }
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
                { this.onClickNavegator() }
        
              {/* -- Dinamic Login Logo -- */}
              <NavbarNav right>
                <NavUser/>
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

export default NavbarT;

