import React from "react";
import Home from "./containers/home";
import Details from "./containers/details";

import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

class BookStore extends React.Component {
    render() {
        return (
            <Router history={browserHistory} >
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route  path="/home" component={Home}/>
                    <Route  path="/search" component={Home}/>
                    <Route  path="/bookDetail/:id" component={Details}/>
                </Switch>                
            </Router>
        );
    }
}
export default BookStore;