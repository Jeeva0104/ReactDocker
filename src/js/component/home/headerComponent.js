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
          <span className="mobile"><i class="fa fa-phone" aria-hidden="true"></i>+91 9942233381</span>
          <span className="email"><i class="fa fa-envelope" aria-hidden="true"></i>suganth2610@gmail.com</span>
        </div>
        <div className={`topnav ${this.state.isOpen ? 'responsive' : ''}`} id="myTopnav">
          <a href="javascript:void(0)">Hotel BlueBerry</a>
          <a href="javascript:void(0);" onClick={this.goToGalleryPage}>Gallery</a>
          <a href="javascript:void(0);" onClick={this.scrollTocontact}>Contact Us</a>
          <a href="javascript:void(0);" onClick={this.scrollToPackage}>Packages</a>
          <a href="javascript:void(0);" className="icon" onClick={this.toggle}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    );
  }
}