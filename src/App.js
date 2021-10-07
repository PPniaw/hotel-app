import React, { Component } from 'react'
import { BrowserRouter, Route, Switch ,Redirect } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home'
import Rooms from './pages/Rooms/Rooms'
import Connect from './pages/Connect/Connect'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/rooms' component={Rooms}></Route>
                    <Route path='/connect' component={Connect}></Route>
                    <Redirect to='/home'></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
};