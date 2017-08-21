// import { SEARCH_DATA, HANDLE_SEARCH_TERM, FILTER_BOOK_DETAIL, EDIT_BOOK_DETAIL, HANDLE_BOOK_DETAIL_CHANGE, 
// SAVE_BOOK_DETAIL, REVERT_BOOK_DETAIL} from "../constants/actionTypes";
import * as actionTypes from "../constants/actionTypes";

export function handleSearchTerm(searchValue) {
    return {
        type: actionTypes.HANDLE_SEARCH_TERM,
        searchValue
    };
}
export function searchData() {
    return {
        type: actionTypes.HANDLE_SEARCH_TERM        
    };
}
export function fetchBooksData() {
    return {
        type: actionTypes.FETCH_BOOKS_DATA        
    };
}
export function updateBooksData(booksData) {
    return {
        type: actionTypes.UPDATE_BOOKS_DATA,
        booksData
    };
}
export function storeBookData(bookData) {
    return {
        type: actionTypes.STORE_BOOK_DATA,
        bookData
    };
}
