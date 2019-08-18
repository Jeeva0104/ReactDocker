import React, { Component } from "react";

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts_container">
                <div className="contacts_wrapper">
                    <span className="">
                        How can we help you?
				</span>
                    <span className="email_us">
                        Send us email at <span className="">jeevaramu97@gmail.com</span>
                        <br />
                        Or call us at <span className="">9688669002</span>
                    </span>
                </div>
            </div>
        )
    }
}