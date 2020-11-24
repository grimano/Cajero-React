import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './../../Page/Home/home.page';
import NotFoundPage from './../../Page/NotFound/NotFound.page';
import ErrorPage from './../../Page/Error/Error.page';
const PublicRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/Error' component={ErrorPage}></Route>
            <Redirect from='/Balance' to='/'></Redirect>
            <Redirect from='/Menu' to='/'></Redirect>
            <Redirect from='/Pin' to='/'></Redirect>
            <Redirect from='/Retiro' to='/'></Redirect>
            <Route exact strict component={NotFoundPage}></Route>
        </Switch>
    )
}

export default PublicRoute;