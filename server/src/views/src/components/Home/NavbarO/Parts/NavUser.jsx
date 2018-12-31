import React from 'react';
import {Fa, NavItem, NavLink } from 'mdbreact';

const NavUser = (props) => {
    return (
        <NavItem>
            {
                props.logged ? (
                    <NavLink className="navbar-brand mr-5" to={props.type === 'student' ? '/panele' : '/panelt'}>
                        <p className="text-white mt-2 align-middle"><Fa icon="unlock" /><span> </span>Entrar</p>
                    </NavLink>                    
                ):(
                    <NavLink className="navbar-brand mr-5" to="/login">
                        <p className="text-white mt-2 align-middle"><Fa icon="lock" /><span> </span>Login</p>
                    </NavLink>
                )
            }
        </NavItem>
    );
}

export default NavUser;
