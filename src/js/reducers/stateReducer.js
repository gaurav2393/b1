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
        case actionTypes.SEARCH_DATA: 
            return searchData();
        case actionTypes.HANDLE_SEARCH_TERM: 
            return handleSearchTerm(state, action);
        case actionTypes.FETCH_BOOKS_DATA:             
            return state;
        case actionTypes.UPDATE_BOOKS_DATA: 
            return updateBooksData(state, action);
        case actionTypes.FILTER_BOOK_DETAIL: 
            return filerBookDetail();
        case actionTypes.EDIT_BOOK_DETAIL: 
            return searchData();
        case actionTypes.HANDLE_BOOK_DETAIL_CHANGE: 
            return handleBookDetailChange();
        case actionTypes.SAVE_BOOK_DETAIL: 
            return saveBookDetail();
        case actionTypes.REVERT_BOOK_DETAIL: 
            return revertBookDetail();
        default:
            return state;
    }
};
export default rootReducer;