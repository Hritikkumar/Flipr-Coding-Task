import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler,Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
        };
        this.toggleNav=this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render(){
        return(
            <React.Fragment>
                <Navbar color="light" light expand="md" className="shadow-sm">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/assets/images/logo.svg" height="30" width="41" alt="Intugine"/>
                        </NavbarBrand>
                        <NavbarBrand className="mr-auto text-dark">
                            Intugine
                        </NavbarBrand>   
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar  className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="">Brands</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="">Transporters</NavLink>
                                </NavItem>
                                
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <img src="/assets/images/profile.svg" width="20" alt="Profile" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;