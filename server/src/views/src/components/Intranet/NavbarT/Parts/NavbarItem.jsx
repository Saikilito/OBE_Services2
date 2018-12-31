import React, { Component } from 'react';
import { Link as HashLink } from "react-scroll";
import { Fa, NavbarNav, NavItem } from 'mdbreact';


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
        logged: false,
        item: 0,        
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
            <React.Fragment>
                <NavbarNav left>
            {
                !this.state.logged ? (
                    <p className="text-white lead"><Fa className="mr-2" icon="globe" size="lg"/>     Ingrese sus datos para disfrutar de nuestros servicios!</p>
                    ):
                    (
                        menuHome.map((e,i)=>(
                            <NavItem key={`${i}HlinkHome`} active={this.state.item === i ? true : false}>
                                   <HashLink to={e.name}
                                       name={e.name}
                                       activeClass="active"
                                       className="nav-link Ripple-parent"
                                       key={`${i}HlinkHome`}
                                       spy={true} smooth={true} 
                                       offset={500} duration={1200}
                                       onClick={this.onClickSelect}>
                                       {e.name}
                                   </HashLink>
                            </NavItem> 
                    ))

                    )
                }
                </NavbarNav>
                </React.Fragment>
        );
    }
}

export default HomeNav;
