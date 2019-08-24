import React, { Component, createRef } from "react";
import DashBoardNav from './DashboardNav'
import HeaderComponent from '../../component/home/headerComponent';
import CarouselComponent from '../../component/home/CarouselComponent';
import Packages from '../../component/home/Packages';
import Contacts from '../../component/home/contact';
// import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Gallery from 'js/component/home/gallery'
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
                <Route path='/gallery' component={Gallery} />
                <Route exact path='/' component={CarouselComponent} />
                <Route exact path='/' render={() => <Packages {...{ packageRef }} />} />
                <Route exact path='/' render={() => <Contacts {...{ contactRef }} />} />
                <Route exact path='/gallery' render={() => <Contacts {...{ contactRef }} />} />
                {/* <Redirect exact to='/dashboard' /> */}
            </div>
        )
    }
}