import React from "react";
import { connect } from "react-redux";
import Home from "../components/home";
import * as actions from "../actions/actions";
import { search } from "../common/common";

const mapStateToProps = ({state}) => {
    return {
        search: state.search,
        booksData: (searchValue = "")=> {
            searchValue=searchValue.toUpperCase();
            var booksData = state.booksData;
            var length = booksData.length;
            var dataToRender = [];
            for( let i = 0; i < length; i++ ) {
                let name = booksData[i]["name"].toUpperCase();
                if(search(searchValue, name)) {
                    dataToRender.push(booksData[i]);
                }
            }
            return dataToRender;
        }
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