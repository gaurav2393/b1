
import * as actionTypes from "../constants/actionTypes";

export function handleSearchTerm(searchValue) {
    return {
        type: actionTypes.HANDLE_SEARCH_TERM,
        searchValue
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
