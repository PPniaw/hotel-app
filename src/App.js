import React, { Component } from 'react'
import { BrowserRouter, Route, Switch ,Redirect } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home'
import Rooms from './pages/Rooms/Rooms'
import Connect from './pages/Connect/Connect'
import RoomDetail from './pages/RoomDetail/RoomDetail'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/meal' component={Home}></Route>
                    <Route exact path='/rooms' component={Rooms}></Route>
                    <Route path='/rooms/:roomId' component={RoomDetail}></Route>
                    <Route path='/connect' component={Connect}></Route>
                    <Redirect to='/'></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
};