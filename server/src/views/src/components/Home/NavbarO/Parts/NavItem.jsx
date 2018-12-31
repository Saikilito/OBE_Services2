import React, { Component } from 'react';
import { Link as HashLink } from "react-scroll";
import { NavbarNav, NavItem} from 'mdbreact';

const menuHome = [
    { "name": "Home" },
    { "name": "Nosotros" },
    { "name": "Servicios"},
    { "name": "Noticias" },
    { "name": "Contacto" }
  ]

class HomeNav extends Component {
constructor()
{
    super();
    this.state={
        item: 0
    }
    this.onClickSelect = this.onClickSelect.bind(this);
}

onClickSelect(e) {
    if (e.target.name === "Home")
      this.setState({ item: 0 })
    else if (e.target.name === "Nosotros")
      this.setState({ item: 1 })
    else if (e.target.name === "Servicios")
      this.setState({ item: 2 })
    else if (e.target.name === "Noticias")
      this.setState({ item: 3 })
    else if (e.target.name === "Contacto")
      this.setState({ item: 4 })
  }
    
    render() {
        return (
            <NavbarNav left>
                {
                    menuHome.map((e, i) =>
                    <NavItem key={`${i}HlinkHome`} active={this.state.item === i ? true : false}>
                        <HashLink to={e.name}
                            name={e.name}
                            activeClass="active"
                            className="nav-link Ripple-parent"
                            key={`${i}HlinkHome`}
                            spy={false} smooth={true} hashSpy={true}
                            isDynamic={true}
                            offset={50} duration={1200}
                            onClick={this.onClickSelect}>
                        
                            {e.name}
                        
                        </HashLink>
                    </NavItem> )
                }
            </NavbarNav>
        );
    }
}

export default HomeNav;
