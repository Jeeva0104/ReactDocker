import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'js/container/dashboard/Headerpage';
import Gallery from 'js/component/home/gallery'
function MainRouter() {
    return (
        <Switch>
            <Route path='/' component={Header} />
            {/* <Route path='/gallery' component={Gallery} /> */}
            {/* <Redirect to='/dashboard/gallery' /> */}
        </Switch>
    )
}

export default MainRouter;