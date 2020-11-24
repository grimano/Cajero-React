import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BalancePage from './../../Page/Balance/Balance.page';
import MenuPage from './../../Page/Menu/Menu.page';
import Pinpage from './../../Page/Pin/Pin.page';
import RetiroPage from './../../Page/Retiro/Retiro.page';
import HomePage from './../../Page/Home/home.page';
import NotFoundPage from './../../Page/NotFound/NotFound.page';
import ErrorPage from './../../Page/Error/Error.page';
const PrivateRoute = () => {
    return (
        <Switch>
            <Route exact path='/Balance' component={BalancePage}></Route>
            <Route exact path='/Menu' component={MenuPage}></Route>
            <Route exact path='/Pin' component={Pinpage}></Route>
            <Route exact path='/Retiro' component={RetiroPage}></Route>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/Error' component={ErrorPage}></Route>
            <Route exact strict component={NotFoundPage}></Route>
        </Switch>
    )
}

export default PrivateRoute;