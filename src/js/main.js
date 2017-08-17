import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import BookStore from "./bookStore";
import myReducers from "./reducers/stateReducer.js";
import {Provider} from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/saga.js"; 
import createSagaMiddleware from "redux-saga";

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
                <BookStore />
            </Provider>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));