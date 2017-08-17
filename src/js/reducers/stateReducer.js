import * as actionTypes from "../constants/actionTypes";
import _ from "lodash";

const DEFAULT_STATE = {
    search: {
        searchTerm: ""
    },
    booksData: [],
    details: {
        edit: false
    }
};
const handleSearchTerm = ( state, action ) => {
    var newState = {};
    _.assign(newState, state, { search: { searchTerm: action.searchValue }});
    return newState;
};
const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case actionTypes.SEARCH_DATA: 
            return searchData();
        case actionTypes.HANDLE_SEARCH_TERM: 
            return handleSearchTerm(state, searchValue);
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