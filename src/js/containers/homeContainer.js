import React from "react";
import { connect } from "react-redux";
import Home from "../components/home";
import * as actions from "../actions/actions";
import { search } from "../common/common";

const mapStateToProps = ({state}) => {
    return {
        search: state.search,
        booksData: state.booksData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchTerm: (searchValue) => {
            dispatch(actions.handleSearchTerm(searchValue));
        },
        fetchBooksData: () => {
            dispatch(actions.fetchBooksData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);