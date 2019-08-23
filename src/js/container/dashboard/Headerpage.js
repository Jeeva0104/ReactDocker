import React, { Component, createRef } from "react";
import DashBoardNav from './DashboardNav'
import HeaderComponent from '../../component/home/headerComponent';
import CarouselComponent from '../../component/home/CarouselComponent';
import Packages from '../../component/home/Packages';
import Contacts from '../../component/home/contact'
import './../../../css/styles.css';

export default class HeaderPage extends Component {
    render() {
        const packageRef = createRef();
        const contactRef = createRef();
        const scrollToPackage = () =>
            packageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        const scrollTocontact = () =>
            packageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        return (
            <div>
                <HeaderComponent
                    {...{ ...this.props, scrollToPackage, scrollTocontact }}
                />
                <CarouselComponent />
                <Packages {...{ packageRef }} />
                <Contacts {...{ contactRef }} />
            </div>
        )
    }
}