import React from 'react';
import {Fa, NavItem, NavLink } from 'mdbreact';
const NavUser = () => {
    return (
        <NavItem>
            <NavLink className="navbar-brand mr-5" to="/login">
                <p className="text-white mt-2 align-middle"><Fa icon="lock" size="lg" /></p>
            </NavLink>
        </NavItem>
    );
}

export default NavUser;
