import {all, takeEvery, call, put, race } from "redux-saga/effects";
import { SEARCH_DATA, HANDLE_SEARCH_TERM, FILTER_BOOK_DETAIL, EDIT_BOOK_DETAIL, HANDLE_BOOK_DETAIL_CHANGE, 
SAVE_BOOK_DETAIL, REVERT_BOOK_DETAIL} from "../constants/actionTypes";



export default function* rootSaga() {    
    //yield takeEvery(HANDLE_SEARCH_TERM, handleSearchTerm);
    yield all()
}