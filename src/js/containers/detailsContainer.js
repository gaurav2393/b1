import React from "react";
import { connect } from "react-redux";
import Details from "../components/details";
import * as actions from "../actions/actions";

const mapStateToProps = ({state}) => {
    return {
        booksData: state.booksData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        storeBookData: (data) => {
            dispatch(actions.storeBookData(data));
        },
        fetchBooksData: () => {
            dispatch(actions.fetchBooksData());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);