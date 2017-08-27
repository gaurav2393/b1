import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import myReducers from "./reducers/stateReducer.js";
import {Provider} from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/saga.js"; 
import createSagaMiddleware from "redux-saga";
import Home from "./containers/homeContainer";
import Details from "./containers/detailsContainer";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  state: myReducers
});
const store = createStore(reducers,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
class Main extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Router history={browserHistory} >
	                <Switch>
	                    <Redirect exact from="/" to="/home"/>
	                    <Route  path="/home" component={Home}/>
	                    <Route  path="/search/:searchText" component={Home}/>
                      <Route  path="/search" component={Home}/>
	                    <Route  path="/bookDetail/:id" component={Details}/>
	                </Switch>                
	            </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));