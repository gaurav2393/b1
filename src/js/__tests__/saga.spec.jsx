import * as saga from '../sagas/saga';
import * as commonFunctions from '../common/common';
import * as actionTypes from '../constants/actionTypes';
import { call, put, takeEvery, race, all } from 'redux-saga/effects';

describe('saga', () => {
    describe('Fetch Books Data', ()=> {
        var fetchBookData;
        beforeAll(() => {
            fetchBookData = saga.fetchBookData();
            commonFunctions.fetchBookData = jest.fn(() => 'fetchHaveBeenCalled');
        })

        it('fetching book data1', () => {
            expect(fetchBookData.next().value).toEqual(call(commonFunctions.fetchBookData));
        })

        it('fetching book data2', () => {
            expect(fetchBookData.next().value).toEqual(put({
                type: actionTypes.UPDATE_BOOKS_DATA, 
                booksData: undefined
            }));
        })
    })
    describe('Storing Book Data', ()=>{
        var storeBookData;
        beforeAll(()=>{
            storeBookData = saga.storeBookData([]);
            commonFunctions.storeBookData = jest.fn(()=>undefined)
        })

        it('Store Data 1', () => {
            expect(storeBookData.next().value).toEqual(call(commonFunctions.storeBookData, []));
        })

        it('Store Data 2', () => {
            expect(storeBookData.next().value).toEqual(put({
                type: actionTypes.UPDATE_BOOKS_DATA, 
                booksData: undefined
            }));
        })
    })
})