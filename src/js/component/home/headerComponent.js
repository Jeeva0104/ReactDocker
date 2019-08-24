import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.goToGalleryPage = this.goToGalleryPage.bind(this);
    this.scrollTocontact = this.scrollTocontact.bind(this);
    this.scrollToPackage = this.scrollToPackage.bind(this);
    this.state = {
      isOpen: false,
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
  scrollTocontact() {
    this.toggle();
    this.props.scrollTocontact();
  }
  scrollToPackage() {
    this.toggle();
    this.props.scrollToPackage();
  }

  render() {

    return (
      <div>
        <div className="topnav_contact">
          <span className="mobile"><i class="fa fa-phone" aria-hidden="true"></i>+91 9886657171</span>
          <span className="email"><i class="fa fa-envelope" aria-hidden="true"></i>hotelblueberry.ooty@gmail.com</span>
        </div>
        <div className={`topnav ${this.state.isOpen ? 'responsive' : ''}`} id="myTopnav">
          <a href="/" >Hotel BlueBerry</a>
          <a href="javascript:void(0);" hidden={this.props.location.pathname == '/gallery'} onClick={this.goToGalleryPage}>Gallery</a>
          <a href="javascript:void(0);" hidden={this.props.location.pathname == '/gallery'} onClick={this.scrollTocontact}>Contact Us</a>
          <a href="javascript:void(0);" hidden={this.props.location.pathname == '/gallery'} onClick={this.scrollToPackage}>Packages</a>
          <a href="javascript:void(0);" hidden={this.props.location.pathname == '/gallery'} className="icon" onClick={this.toggle}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    );
  }
}