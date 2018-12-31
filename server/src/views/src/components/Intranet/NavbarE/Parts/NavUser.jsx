
import React from 'react';
import { Fa, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

const NavUser = (props) => {
    return (
        <NavItem>
            <Dropdown className="navbar-brand mr-5">
                <DropdownToggle nav caret><Fa icon="user" size="lg" /></DropdownToggle>
                <DropdownMenu>
                    <DropdownItem >Hola {props.userName.split(' ')[0]}!</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/" onClick={logout} >Cerrar Sesion</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </NavItem>
    );
}

const logout = () => {
    localStorage.clear();
}

export default NavUser;






