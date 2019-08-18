import React, { Component } from "react";
import DashBoardNav from './DashboardNav'
import HeaderComponent from '../../component/header/headerComponent';
import CarouselComponent from '../../component/header/CarouselComponent';
import Packages from '../../component/header/Packages'
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
            </div>
        )
    }
}