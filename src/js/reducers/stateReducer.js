import * as actionTypes from "../constants/actionTypes";
import _ from "lodash";

const DEFAULT_STATE = {
    search: {
        searchTerm: ""
    },
    booksData: []
};
const handleSearchTerm = ( state, action ) => {
    var newState = {};
    _.assign(newState, state, { search: { searchTerm: action.searchValue }});
    return newState;
};
const updateBooksData = (state, action) => {
    var newState={};
    _.assign(newState, state, {booksData: action.booksData});
    return newState;
};
const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case actionTypes.HANDLE_SEARCH_TERM: 
            return handleSearchTerm(state, action);
        case actionTypes.UPDATE_BOOKS_DATA: 
            return updateBooksData(state, action);
        default:
            return state;
    }
};
export default rootReducer;