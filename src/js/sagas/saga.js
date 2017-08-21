import {all, takeEvery, call, put, race } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import * as commonFunctions from "../common/common";

function* fetchBookData(){
	var booksData = yield call(commonFunctions.fetchBookData);
	yield put({type: actionTypes.UPDATE_BOOKS_DATA, booksData: booksData});
}
function* storeBookData(action){
	alert(action);
	console.log(action);
	var bookData = yield call(commonFunctions.storeBookData, action);
	yield put({type: actionTypes.UPDATE_BOOKS_DATA, booksData: booksData});
}

export default function* rootSaga() {
    // yield all([fetchBookData()]);
    yield takeEvery(actionTypes.STORE_BOOK_DATA, storeBookData);
    yield takeEvery(actionTypes.FETCH_BOOKS_DATA, fetchBookData);
}