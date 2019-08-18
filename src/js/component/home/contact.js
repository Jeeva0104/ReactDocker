import React, { Component } from "react";

export default class Contacts extends Component{
    render(){
        return(
            <div className="footer_container contact">
            <div className="helper">
                <span className="header">
                    How can we help you?
				</span>
                <span className="details">
                    Send us email at <span className="det_contact">jeevaramu97@gmail.com</span>
                    <br />
                    Or call us at <span className="det_contact">9688669002</span>
                </span>
            </div>
        </div>
        )
    }
}