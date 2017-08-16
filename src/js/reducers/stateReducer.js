import { SEARCH_DATA, HANDLE_SEARCH_TERM, FILTER_BOOK_DETAIL, EDIT_BOOK_DETAIL, HANDLE_BOOK_DETAIL_CHANGE, 
SAVE_BOOK_DETAIL, REVERT_BOOK_DETAIL} from '../constants/actionTypes';

const DEFAULT_STATE = {
    search: {
        searchTerm: ''
    },
    bookData: [],
    details: {
        edit: false
    }
}