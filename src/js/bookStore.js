import React from "react";
import Home from "./containers/homeContainer";
import Details from "./containers/detailsContainer";

import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

class BookStore extends React.Component {
    render() {
        return (
            <Router history={browserHistory} >
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route  path="/home" component={Home}/>
                    <Route  path="/search/:searchText" component={Home}/>
                    <Route  path="/bookDetail/:id" component={Details}/>
                </Switch>                
            </Router>
        );
    }
}
export default BookStore;