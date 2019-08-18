import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from 'js/container/dashboard/Headerpage';

function MainRouter(){
    return (
        <Switch>
            <Route path='/dashboard' component={Header} />
            <Redirect to='/dashboard' />
        </Switch>
    )
}

export default MainRouter;