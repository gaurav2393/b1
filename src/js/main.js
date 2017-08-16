import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import BookStore from "./bookStore";
import myReducers from './reducers/stateReducer.js';
import {Provider} from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {logger} from './middleware/middleware.js';

const reducers = combineReducers({
    state: myReducers
});
const store = createStore(reducers, applyMiddleware(logger));
class Main extends React.Component {
    render(){
        return(
            <BookStore />
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));