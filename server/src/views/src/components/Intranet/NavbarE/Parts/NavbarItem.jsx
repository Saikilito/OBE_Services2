import React, { Component , Fragment } from 'react';
import { NavbarNav, NavItem, NavLink } from 'mdbreact';

class NavbarItem extends Component {
    constructor(props) {
        super();
        this.state = {
            item: 0
        }
    }

    onClickSelectPanel = (e) => {
        if (e.target.name === "perfil")
            this.setState({ item: 0 })
        else if (e.target.name === "becas")
            this.setState({ item: 1 })
        else if (e.target.name === "medallas")
            this.setState({ item: 2 })
        else if (e.target.name === "workers")
            this.setState({ item: 3 })
        else if (e.target.name === "register")
            this.setState({ item: 4 })
    }

    render() {
        let type = this.props.userType
        let goBecas
        type === 'student' ? goBecas = '/becase' : (type === 'worker' ? (goBecas = '/becast') : (goBecas = '/becasa'))

        return (
            <React.Fragment>
                <NavbarNav left>
                    <NavItem active={this.state.item === 0 ? true : false}>
                        <NavLink to={type === 'student' ? `/panele` : '/panelt'} name="perfil" className="nav-link Ripple-parent"
                            onClick={this.onClickSelectPanel}
                        >
                            Perfil
                    </NavLink>
                    </NavItem>
                    <NavItem active={this.state.item === 1 ? true : false}>
                        <NavLink to={goBecas} name="becas" className="nav-link Ripple-parent"
                            onClick={this.onClickSelectPanel}
                        >
                            Becas
                        </NavLink>
                    </NavItem>
                    <NavItem active={this.state.item === 2 ? true : false}>
                        <NavLink to={type === 'student' ? `/medale` : '/medalt'} name="medallas" className="nav-link Ripple-parent"
                            onClick={this.onClickSelectPanel}
                        >
                            Medallas
                    </NavLink>
                    </NavItem>
                    {
                        type === "adm" ? (
                            <Fragment>
                                <NavItem active={this.state.item === 3 ? true : false}>
                                    <NavLink to={'/workers'} name="workers" className="nav-link Ripple-parent"
                                        onClick={this.onClickSelectPanel}
                                    >
                                        Trabajadores
                                    </NavLink>
                                </NavItem>
                                <NavItem active={this.state.item === 4 ? true : false}>
                                    <NavLink to={'/register'} name="register" className="nav-link Ripple-parent"
                                        onClick={this.onClickSelectPanel}
                                    >
                                        Registrar
                                    </NavLink>
                                </NavItem>
                            </Fragment>
                        ) : (
                                null
                            )
                    }
                </NavbarNav>
            </React.Fragment>
        );
    }
}

export default NavbarItem;
