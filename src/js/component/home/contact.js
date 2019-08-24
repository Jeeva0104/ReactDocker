import React, { Component } from "react";

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts_container" ref={this.props.contactRef}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="contacts_wrapper">
                            <span className="">
                                How can we help you?
				</span>
                            <span className="email_us">
                                Send us email at <span className=""><i class="fa fa-envelope" aria-hidden="true"></i> hotelblueberry.ooty@gmail.com</span>
                                <br />
                                Or call us at <span className=""><i class="fa fa-phone" aria-hidden="true"></i> +91 9886657171</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <span className="contact_heading">Our Address</span>
                        <span className="contact_content">Hotel blueberry</span>
                        <span className="contact_content">163/j coonoor road</span>
                        <span className="contact_content">opposite aavin diary</span>
                        <span className="contact_content">Ooty -6432001</span>
                        <span className="contact_content">Tamilnadu</span>
                    </div>

                </div>
            </div>
        )
    }
}