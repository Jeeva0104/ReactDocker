import React, { Component } from "react";
import DashBoardNav from './DashboardNav'
import HeaderComponent from '../../component/home/headerComponent';
import CarouselComponent from '../../component/home/CarouselComponent';
import Packages from '../../component/home/Packages';
import Contacts from '../../component/home/contact'
export default class HeaderPage extends Component {
    render() {
        return (
            <div>
                <HeaderComponent 
                {...this.props}
                />
                <hr/>
                <CarouselComponent/>
                <hr/>
                <Packages/>
                <hr/>
                <Contacts/>
            </div>
        )
    }
}