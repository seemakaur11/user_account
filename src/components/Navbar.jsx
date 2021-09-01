import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <NavWrapper>
                    <Link to="/" className="nav-link">home</Link>
                    <Link to="/Login" className="nav-link">login</Link>
                    <Link to="/Signup" className="nav-link">signup</Link>
                    <Link to="/Forget" className="nav-link">forget-password</Link>
                </NavWrapper>
            </Fragment>
        )
    }

}
const NavWrapper = styled.nav`
    background: black;
    height: 75px;
    padding-top: 22px;
    .nav-link {
        color: white;
        font-size: 1.3rem;
        text-transform: capitalize;
        padding: 75px;
        justify-content: left;
        outline: none;
        align-item: right;
    }
`;