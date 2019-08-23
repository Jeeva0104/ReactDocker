import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.goToGalleryPage = this.goToGalleryPage.bind(this)
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  goToGalleryPage() {
    this.props.history.push('/gallery')
  }

  render() {
    return (
      <div className='navbar_container'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="javascript:void(0)">Hotel BlueBerry</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.props.scrollToPackage}>Packages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.props.scrollTocontact}>Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.goToGalleryPage}>Gallery</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    )
  }
}