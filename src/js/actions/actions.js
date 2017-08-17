// import { SEARCH_DATA, HANDLE_SEARCH_TERM, FILTER_BOOK_DETAIL, EDIT_BOOK_DETAIL, HANDLE_BOOK_DETAIL_CHANGE, 
// SAVE_BOOK_DETAIL, REVERT_BOOK_DETAIL} from "../constants/actionTypes";
import * as actionTypes from "../constant/actionTypes";

function handleSearchTerm(searchValue) {
    return {
        type: actionTypes.HANDLE_SEARCH_TERM,
        searchValue
    }
}
function searchData() {
    return {
        type: actionTypes.HANDLE_SEARCH_TERM        
    }
}
function clearSearchTerm() {
    return {
        type: actionTypes.HANDLE_SEARCH_TERM        
    }
}
